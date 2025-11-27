import React from 'react';
import { PredictionResult, FeatureImportance } from '../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CheckCircle2, AlertCircle, TreeDeciduous } from 'lucide-react';
import { FEATURE_IMPORTANCE_DATA } from '../constants';

interface ResultsViewProps {
  result: PredictionResult;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ result }) => {
  const isHighRisk = result.riskLevel === 'high';
  const isModerateRisk = result.riskLevel === 'moderate';
  
  // Dynamic colors
  const primaryColor = isHighRisk ? '#ef4444' : isModerateRisk ? '#f59e0b' : '#10b981';
  const bgColor = isHighRisk ? 'bg-red-50' : isModerateRisk ? 'bg-amber-50' : 'bg-emerald-50';
  const borderColor = isHighRisk ? 'border-red-200' : isModerateRisk ? 'border-amber-200' : 'border-emerald-200';
  const textColor = isHighRisk ? 'text-red-800' : isModerateRisk ? 'text-amber-800' : 'text-emerald-800';
  const iconColor = isHighRisk ? 'text-red-500' : isModerateRisk ? 'text-amber-500' : 'text-emerald-500';

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Risk Summary Card */}
      <div className={`p-6 rounded-xl border ${borderColor} ${bgColor} shadow-sm`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-lg font-semibold ${textColor} flex items-center gap-2`}>
            {isHighRisk ? <AlertCircle className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
            预测结果: {isHighRisk ? '低应答 (High Risk)' : isModerateRisk ? '中等风险 (Moderate Risk)' : '正常应答 (Low Risk)'}
          </h3>
          <span className={`text-3xl font-bold ${textColor}`}>{result.probability.toFixed(0)}%</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-white/50 rounded-full h-4 mb-4 overflow-hidden border border-white/40">
          <div 
            className={`h-full rounded-full transition-all duration-1000 ease-out ${isHighRisk ? 'bg-red-500' : isModerateRisk ? 'bg-amber-500' : 'bg-emerald-500'}`}
            style={{ width: `${result.probability}%` }}
          ></div>
        </div>
        
        <p className={`${textColor} text-sm leading-relaxed`}>
          {isHighRisk 
            ? '模型预测该患者对EPO治疗反应不佳的可能性较高，建议临床医生密切关注并考虑调整治疗方案。' 
            : isModerateRisk 
              ? '模型预测存在一定的EPO低应答风险，建议定期监测相关指标。'
              : '模型预测该患者对EPO治疗反应良好的可能性较高。'}
        </p>
      </div>

      {/* Decision Tree Grid */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
          <TreeDeciduous className="w-4 h-4" />
          随机森林决策树详情 ({result.lowResponseCount}/{result.totalTrees})
        </h4>
        <div className="grid grid-cols-5 gap-2 sm:gap-3">
          {result.treeResults.map((val, idx) => (
            <div 
              key={idx}
              className={`
                aspect-square rounded-lg flex flex-col items-center justify-center text-xs font-bold border
                transition-transform hover:scale-105 cursor-help
                ${val === 1 
                  ? 'bg-red-100 border-red-200 text-red-700' 
                  : 'bg-emerald-100 border-emerald-200 text-emerald-700'}
              `}
              title={`Tree ${idx + 1}: ${val === 1 ? 'Low Response' : 'Normal Response'}`}
            >
              <span>T{idx + 1}</span>
              <span className="text-lg">{val === 1 ? '!' : '✓'}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-end gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> 正常 (0)</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> 低应答 (1)</span>
        </div>
      </div>

      {/* Feature Importance Chart */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
          特征重要性排名
        </h4>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={FEATURE_IMPORTANCE_DATA}
              margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
            >
              <XAxis type="number" hide />
              <YAxis 
                dataKey="label" 
                type="category" 
                width={80} 
                tick={{fontSize: 12, fill: '#64748b'}}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                cursor={{fill: '#f1f5f9'}}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                {FEATURE_IMPORTANCE_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index < 3 ? '#3b82f6' : '#94a3b8'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-slate-400 mt-2 text-center">
          *基于随机森林模型的基尼指数(Gini importance)
        </p>
      </div>
    </div>
  );
};
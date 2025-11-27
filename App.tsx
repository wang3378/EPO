import React, { useState } from 'react';
import { Activity, RotateCcw, Stethoscope, Info } from 'lucide-react';
import { InputField } from './components/InputField';
import { ResultsView } from './components/ResultsView';
import { runPrediction } from './utils/forestLogic';
import { PatientData, PredictionResult } from './types';
import { DEFAULT_FORM_DATA } from './constants';

const App: React.FC = () => {
  const [formData, setFormData] = useState<PatientData>(DEFAULT_FORM_DATA);
  const [result, setResult] = useState<PredictionResult | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePredict = () => {
    // Basic validation to check if at least one field is filled, or warn user
    const hasData = Object.values(formData).some(val => val !== '');
    if (!hasData) {
      alert("请至少输入一项临床指标");
      return;
    }
    const prediction = runPrediction(formData);
    setResult(prediction);
  };

  const handleReset = () => {
    setFormData(DEFAULT_FORM_DATA);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <header className="mb-10 text-center space-y-2">
          <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-200 mb-4">
            <Activity className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            MHD患者 <span className="text-blue-600">EPO低应答</span> 预测模型
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            基于随机森林算法的智能辅助医疗决策系统
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Input Section - Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-blue-600" />
                <h2 className="font-semibold text-slate-800">患者临床指标</h2>
              </div>
              
              <div className="p-6 space-y-5">
                <InputField 
                  id="cysc" 
                  label="Cysc (血清胱抑素C)" 
                  value={formData.cysc} 
                  onChange={handleInputChange} 
                  placeholder="例如: 7.5"
                  unit="mg/L"
                />
                <InputField 
                  id="alb" 
                  label="ALB (白蛋白)" 
                  value={formData.alb} 
                  onChange={handleInputChange} 
                  placeholder="例如: 38.5"
                  unit="g/L"
                />
                <InputField 
                  id="bun" 
                  label="BUN (尿素氮)" 
                  value={formData.bun} 
                  onChange={handleInputChange} 
                  placeholder="例如: 22.0"
                  unit="mmol/L"
                />
                <InputField 
                  id="ferritin" 
                  label="铁蛋白" 
                  value={formData.ferritin} 
                  onChange={handleInputChange} 
                  placeholder="例如: 75.0"
                  unit="μg/L"
                />
                <InputField 
                  id="mg" 
                  label="Mg (血镁)" 
                  value={formData.mg} 
                  onChange={handleInputChange} 
                  placeholder="例如: 1.05"
                  unit="mmol/L"
                />
                <InputField 
                  id="transferrin" 
                  label="转铁蛋白" 
                  value={formData.transferrin} 
                  onChange={handleInputChange} 
                  placeholder="例如: 2.35"
                  unit="g/L"
                />
                <InputField 
                  id="epo" 
                  label="周EPO使用剂量" 
                  value={formData.epo} 
                  onChange={handleInputChange} 
                  placeholder="例如: 150.0"
                  unit="U"
                />

                <div className="pt-4 grid grid-cols-2 gap-4">
                  <button
                    onClick={handleReset}
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors duration-200"
                  >
                    <RotateCcw className="w-4 h-4" />
                    重置
                  </button>
                  <button
                    onClick={handlePredict}
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md shadow-blue-200 transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    <Activity className="w-4 h-4" />
                    进行预测
                  </button>
                </div>
              </div>
            </div>
            
            {/* Disclaimer for Mobile (moves to bottom visually on desktop usually, but good here) */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3">
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-1">免责声明</p>
                <p className="opacity-90">本工具仅供临床参考，结果不能作为唯一的诊断或治疗依据。请结合医生专业判断。</p>
              </div>
            </div>
          </div>

          {/* Results Section - Right Column */}
          <div className="lg:col-span-7">
            {result ? (
              <ResultsView result={result} />
            ) : (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-white/50 border border-dashed border-slate-300 rounded-2xl">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <Activity className="w-10 h-10 text-slate-300" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">等待数据输入</h3>
                <p className="text-slate-500 max-w-sm">
                  请在左侧表单中输入患者的各项临床指标，点击"进行预测"查看风险评估报告。
                </p>
              </div>
            )}
          </div>
          
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-slate-400 text-sm pb-8">
          <p>&copy; {new Date().getFullYear()} 随机森林EPO低应答预测模型 - Medical Decision Support System</p>
        </footer>

      </div>
    </div>
  );
};

export default App;
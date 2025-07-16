import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    
 <div data-layer="Welcome Screen" className="WelcomeScreen w-[1280px] h-[832px] relative bg-blue-100 overflow-hidden">
  <div data-layer="Button" data-show-icon="False" data-state="Enabled" data-style="Filled" className="Button w-64 h-16 left-[79px] top-[418px] absolute bg-blue-600 rounded-[35px] inline-flex flex-col justify-center items-center gap-2 overflow-hidden">
    <div data-layer="state-layer" className="StateLayer self-stretch flex-1 px-6 py-2.5 inline-flex justify-center items-center gap-2">
      <div data-layer="label-text" className="LabelText text-center justify-center text-white text-3xl font-bold font-['Roboto'] leading-tight tracking-tight">Take a Quiz</div>
    </div>
  </div>
  <div data-layer="Button" data-show-icon="False" data-state="Enabled" data-style="Filled" className="Button w-64 h-16 left-[382px] top-[418px] absolute bg-blue-600 rounded-[35px] inline-flex flex-col justify-center items-center gap-2 overflow-hidden">
    <div data-layer="state-layer" className="StateLayer self-stretch flex-1 px-6 py-2.5 inline-flex justify-center items-center gap-2">
      <div data-layer="label-text" className="LabelText text-center justify-center text-white text-3xl font-bold font-['Roboto'] leading-tight tracking-tight">Make a Quiz</div>
    </div>
  </div>
  <div data-layer="Use a code to access a quiz." className="UseACodeToAccessAQuiz left-[93px] top-[497px] absolute text-center justify-center text-black text-lg font-medium font-['Roboto'] leading-tight tracking-tight">Use a code to access a quiz.</div>
  <div data-layer="Create your own quiz to share." className="CreateYourOwnQuizToShare left-[387px] top-[497px] absolute text-center justify-center text-black text-lg font-medium font-['Roboto'] leading-tight tracking-tight">Create your own quiz to share.</div>
  <div data-layer="Welcome to VisioLearn" className="WelcomeToVisiolearn left-[79px] top-[251px] absolute text-center justify-start text-zinc-900 text-5xl font-bold font-['Poppins'] leading-[50px]">Welcome to VisioLearn</div>
  <div data-layer="Create. Learn. Remember" className="CreateLearnRemember left-[119px] top-[318px] absolute text-center justify-start text-neutral-700 text-4xl font-normal font-['Poppins'] leading-10">Create. Learn. Remember</div>
  <img data-layer="21095 1" className="1 size-[617px] left-[663px] top-[80px] absolute" src="https://placehold.co/617x617" />
  <img data-layer="ElevenLabs_2025-04-14T06_43_13_Rachel_pre_sp100_s50_sb75_se0_b_m2 1" className="Elevenlabs20250414t064313RachelPreSp100S50Sb75Se0BM21 w-36 h-28 left-[482px] top-[-142px] absolute" src="https://placehold.co/145x109" />
</div>
    
  );
}
import React from 'react';
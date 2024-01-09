'use client'

import '@/styles/progress.css';
import { useState } from 'react';

export default function PrgUpd({ updateData }) {

    // Progress 단계 관련 상수 및 라벨 설정
    const totalSteps = 4; // 전체 단계 수
    const stepLabels = ['Not started', 'Started', 'In Progress', 'Completed']; // 각 단계의 라벨

    // updateData.progress와 일치하는 라벨 찾기
    const matchedLabel = stepLabels.find(label => label === updateData.progress);

    // updateData.progress 현재단계의 인덱스 찾기
    const index = stepLabels.indexOf(updateData.progress);

    // 현재 단계 및 라벨을 state로 관리
    const [currentStep, setCurrentStep] = useState(index + 1); // 현재 단계 + 1
    const [currentLabel, setCurrentLabel] = useState(matchedLabel); // 현재 라벨

    // 버튼 클릭 이벤트 처리 함수
    const handleButtonClick = (stepChange) => {
        // 새로운 단계 계산
        const newStep = currentStep + stepChange;

        // 단계가 유효한 범위 내에 있는지 확인하고 업데이트
        // 새로 설정한 단계가 1보다 작거나 같으면 and totalStep보다 작으면 
        // currentStep state값 변경
        if (newStep >= 1 && newStep <= totalSteps + 1) {
            setCurrentStep(newStep);
            setCurrentLabel(stepLabels[newStep - 1]);
        }
    };

    return (
        <div className='prgupd'>
             <div className='progress-txt'>
                <p>현재 진행상태를 설정해주세요. </p>
            </div>
            <div className="progress-container">
                <div className="steps">
                    {/* 각 단계를 나타내는 동그라미들을 생성 */}
                    {stepLabels.map((step, index) => (
                        <span
                            key={index}
                            className={`circle ${index + 1 === currentStep ? 'active' : ''}`}
                            readOnly // 읽기 전용으로 설정하여 직접 수정 방지
                        >
                            {step}
                        </span>
                    ))}
                    {/* 진행 바 */}
                    <div className="progress-bar">
                        {/* 현재 단계에 따라 진행 바의 너비 조절 */}
                        <span className="indicator" style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}></span>
                    </div>
                </div>
                <div className="buttons">
                    {/*  첫 번째 단계에서는 이전 버튼 비활성화 */}
                    <button type="button" onClick={() => handleButtonClick(-1)} disabled={currentStep === 1}>
                        이전
                    </button>
                    {/* 마지막 단계에서는 다음 버튼 비활성화 */}
                    <button type="button" onClick={() => handleButtonClick(1)} disabled={currentStep === stepLabels.length}>
                        다음
                    </button>
                </div>
                <input
                    name='progress'
                    value={currentLabel}
                    id='progressDataHide'
                    readOnly
                ></input>
            </div>
        </div>
           
   
    );
}

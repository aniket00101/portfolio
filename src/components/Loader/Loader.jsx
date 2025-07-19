import React from "react";

const HamsterLoader = () => (
  <div className="w-screen h-screen flex items-center justify-center bg-[#121621] relative overflow-hidden">
    {/* Loader */}
    <div className="loader relative w-[200px] h-[320px]">
      {Array.from({ length: 8 }).map((_, n) => (
        <div key={n} className={`box box${n} absolute`}>
          <div />
        </div>
      ))}
      <div className="ground absolute left-[-50px] bottom-[-120px]">
        <div />
      </div>
    </div>

    <style>
      {`:root {
        --background: #121621;
        --duration: 3s;
        --primary: rgba(39, 94, 254, 1);
        --primary-light: #2f71ff;
        --primary-rgba: rgba(39, 94, 254, 0);
      }
      
      .loader {
        transform-style: preserve-3d;
      }
      
      .loader::before,
      .loader::after {
        content: '';
        width: 320px;
        height: 140px;
        position: absolute;
        bottom: -11px;
        background: var(--background);
        transform: translateZ(200px) rotate(20.5deg);
        animation: mask var(--duration) linear forwards infinite;
        right: 32%;
      }
      
      .loader::after {
        transform: translateZ(200px) rotate(-20.5deg);
        left: 32%;
        right: auto;
      }

      .ground > div {
        transform: rotateX(90deg) rotateY(0) translate(-48px, -120px) translateZ(100px) scale(0);
        width: 200px;
        height: 200px;
        background: linear-gradient(45deg, var(--primary) 0%, var(--primary) 50%, var(--primary-light) 50%, var(--primary-light) 100%);
        transform-style: preserve-3d;
        animation: ground var(--duration) linear forwards infinite;
        position: relative;
      }

      .ground > div::before,
      .ground > div::after {
        content: '';
        width: 156px;
        height: 300px;
        opacity: 0;
        background: linear-gradient(var(--primary), var(--primary-rgba));
        position: absolute;
        animation: ground-shine var(--duration) linear forwards infinite;
      }

      .ground > div::before {
        transform: rotateX(90deg) rotateY(0deg) translate(44px, 162px) translateZ(-50px);
      }

      .ground > div::after {
        transform: rotateX(90deg) rotateY(90deg) translate(0, 177px) translateZ(150px);
      }

      .box {
        --x: 0;
        --y: 0;
        position: absolute;
        animation: var(--duration) linear forwards infinite;
      }

      .box > div {
        background-color: var(--primary);
        width: 48px;
        height: 48px;
        position: relative;
        transform-style: preserve-3d;
        animation: var(--duration) ease forwards infinite;
        transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
      }

      .box > div::before,
      .box > div::after {
        content: '';
        position: absolute;
        background-color: inherit;
        width: inherit;
        height: inherit;
        transform: rotateX(90deg) translateY(-24px) translateZ(24px);
        filter: brightness(1.2);
      }

      .box > div::after {
        transform: rotateY(90deg) translateX(24px) translateZ(24px);
        filter: brightness(1.4);
      }

      /* Positioning each box */
      .box0 { --x: -220px; --y: -120px; left: 58px; top: 108px; }
      .box1 { --x: -260px; --y: 120px; left: 25px; top: 120px; }
      .box2 { --x: 120px; --y: -190px; left: 58px; top: 64px; }
      .box3 { --x: 280px; --y: -40px; left: 91px; top: 120px; }
      .box4 { --x: 60px; --y: 200px; left: 58px; top: 132px; }
      .box5 { --x: -220px; --y: -120px; left: 25px; top: 76px; }
      .box6 { --x: -260px; --y: 120px; left: 91px; top: 76px; }
      .box7 { --x: -240px; --y: 200px; left: 58px; top: 87px; }

      /* Keyframes for boxes */
      ${[...Array(8)].map((_, i) => {
        const delay = i * 4;
        return `
          @keyframes box-move${i} {
            ${12 + delay}% {
              transform: translate(var(--x), var(--y));
            }
            ${25 + delay}%, 52% {
              transform: translate(0, 0);
            }
            80% {
              transform: translate(0, -32px);
            }
            90%, 100% {
              transform: translate(0, 188px);
            }
          }
          @keyframes box-scale${i} {
            ${6 + delay}% {
              transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
            }
            ${14 + delay}%, 100% {
              transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
            }
          }
          .box${i} {
            animation-name: box-move${i};
          }
          .box${i} > div {
            animation-name: box-scale${i};
          }
        `;
      }).join('\n')}

      /* Ground + shine + mask animation */
      @keyframes ground {
        0%, 65% {
          transform: rotateX(90deg) translate(-48px, -120px) translateZ(100px) scale(0);
        }
        75%, 90% {
          transform: rotateX(90deg) translate(-48px, -120px) translateZ(100px) scale(1);
        }
        100% {
          transform: rotateX(90deg) translate(-48px, -120px) translateZ(100px) scale(0);
        }
      }

      @keyframes ground-shine {
        0%, 70% { opacity: 0; }
        75%, 87% { opacity: 0.2; }
        100% { opacity: 0; }
      }

      @keyframes mask {
        0%, 65% { opacity: 0; }
        66%, 100% { opacity: 1; }
      }
      `}
    </style>
  </div>
);

export default HamsterLoader;

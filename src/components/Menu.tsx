import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu__info">
        <div className="menu__greeting">
          <h2>Introduction</h2>
          <p>
            ANIMAT is the first AI platform to integrate MMD and facial 
            tracking for dynamic 3D Model,enabling realistic 
            customization and upgrade of AgentAI.
          </p>
        </div>
        <img
          src="./chicago.jpg"
          alt="Me sitting on a dock in Chicago"
          height="200px"
        />
      </div>

      <a
        href="https://github.com/Apcoev/AnimatAI"  // 这里是你想跳转的外部链接
        className="menu__button"
        target="_blank"  // target="_blank" 确保链接在新标签页打开
        rel="noopener noreferrer"  // 安全性设置，防止某些类型的攻击
      >
        <span className="menu__header">GitHub</span>
        <span className="menu__subheader">View more info</span>
      </a>

      <a
        href="https://x.com/animat_ai"  // 这里是你想跳转的外部链接
        className="menu__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="menu__header">Twitter</span>
        <span className="menu__subheader">Animat Twitter </span>
      </a>

      <a
        href="https://t.me/AnimatAI"  // 这里是你想跳转的外部链接
        className="menu__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="menu__header">Telegram</span>
        <span className="menu__subheader">Animat Chat</span>
      </a>

      <a
        href="https://www.example.com/contact"  // 这里是你想跳转的外部链接
        className="menu__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="menu__header">App</span>
        <span className="menu__subheader">Beta live now</span>
      </a>
    </div>
  );
}

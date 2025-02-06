import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <div className="menu__info">
        <div className="menu__greeting">
          <h2>Hi there!</h2>
          <p>
            My name is Peter and I am a Full Stack Web Developer. I love
            building new systems that empower developers and users to do their
            best work. Explore some of the stuff I have done using the buttons
            below!
          </p>
        </div>
        <img
          src="./chicago.jpg"
          alt="Me sitting on a dock in Chicago"
          height="200px"
        />
      </div>

      <a
        href="https://barqawiz.github.io/Tamagotchi/cat.html"  // 这里是你想跳转的外部链接
        className="menu__button"
        target="_blank"  // target="_blank" 确保链接在新标签页打开
        rel="noopener noreferrer"  // 安全性设置，防止某些类型的攻击
      >
        <span className="menu__header">Resume</span>
        <span className="menu__subheader">View my resume</span>
      </a>

      <a
        href="https://www.example.com/projects"  // 这里是你想跳转的外部链接
        className="menu__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="menu__header">Projects</span>
        <span className="menu__subheader">See various projects I have worked on</span>
      </a>

      <a
        href="https://www.example.com/about"  // 这里是你想跳转的外部链接
        className="menu__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="menu__header">About</span>
        <span className="menu__subheader">Read more about me</span>
      </a>

      <a
        href="https://www.example.com/contact"  // 这里是你想跳转的外部链接
        className="menu__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="menu__header">Contact</span>
        <span className="menu__subheader">Connect with me</span>
      </a>
    </div>
  );
}

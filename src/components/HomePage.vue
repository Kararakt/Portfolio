<script setup lang="ts">
import {
  UserFilled,
  StarFilled,
  PhoneFilled,
  LocationFilled,
  Promotion,
} from "@element-plus/icons-vue";
</script>

<template>
  <div>
    <div class="main_div--header" id="header">
      <div class="user--header">
        <el-avatar
          shape="circle"
          :size="120"
          :icon="UserFilled"
          class="avatar--header mb-1"
        ></el-avatar>
        <h3 class="name--header">Denis Vlaskin</h3>
        <p class="post--header">Frontend Developer</p>
      </div>
      <nav class="navbar--header">
        <ul class="ul--header">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>

    <div id="menu" class="fas fa-bars"></div>

    <section class="home" id="home">
      <h3>HI THERE !</h3>
      <h1>I'M <span> Denis Vlaskin</span></h1>
      <p>
        I'm using JavaScript programming language, HTML5, CSS3, VUE.js framework
        and Tailwind CSS library
      </p>
      <div>
        <a href="#about"
          ><button class="btn--home gap-2">
            About Me <i class="fas fa-user"></i></button
        ></a>
      </div>
    </section>
    <section class="about" id="about">
      <h1 class="header--all"><span>About</span> Me</h1>
      <div class="row--about">
        <div class="info--about">
          <h3><span> Name:</span> Denis</h3>
          <h3><span> Surname:</span> Vlaskin</h3>
          <h3><span> Age:</span> 21</h3>
          <h3><span> Language:</span> Russian</h3>
        </div>
        <div class="counter--about">
          <div class="box--about">
            <span>0+</span>
            <h3>Years Of Experience</h3>
          </div>
          <div class="box--about">
            <span>0+</span>
            <h3>Project Completed</h3>
          </div>
          <div class="box--about">
            <span>0+</span>
            <h3>Awards</h3>
          </div>
        </div>
      </div>
    </section>

    <section class="education" id="education">
      <h1 class="header--all">My <span>Education</span></h1>
      <div class="box_container--education">
        <div class="box--education">
          <el-icon class="icon--education" :size="30"><StarFilled /></el-icon>
          <span> 2019</span>
          <h3>MIREA</h3>
          <p>
            Russian Technological University. Direction "Information security of
            security systems", Department "Information Protection"
          </p>
        </div>
        <div class="box--education">
          <el-icon class="icon--education" :size="30"><StarFilled /></el-icon>
          <span> 2019</span>
          <h3>MIREA</h3>
          <p>
            Russian Technological University. Direction "Information security of
            security systems", Department "Information Protection"
          </p>
        </div>
        <div class="box--education">
          <el-icon class="icon--education" :size="30"><StarFilled /></el-icon>
          <span> 2019</span>
          <h3>MIREA</h3>
          <p>
            Russian Technological University. Direction "Information security of
            security systems", Department "Information Protection"
          </p>
        </div>
        <div class="box--education">
          <el-icon class="icon--education" :size="30"><StarFilled /></el-icon>
          <span> 2019</span>
          <h3>MIREA</h3>
          <p>
            Russian Technological University. Direction "Information security of
            security systems", Department "Information Protection"
          </p>
        </div>
      </div>
    </section>

    <section class="portfolio" id="portfolio">
      <h1 class="header--all">My <span>Portfolio</span></h1>
      <div class="box_container--portfolio">
        <div class="box--portfolio">
          <img src="../assets/first.jpg" alt="" />
        </div>
        <div class="box--portfolio">
          <img src="../assets/first.jpg" alt="" />
        </div>
        <div class="box--portfolio">
          <img src="../assets/first.jpg" alt="" />
        </div>
        <div class="box--portfolio">
          <img src="../assets/first.jpg" alt="" />
        </div>
      </div>
    </section>

    <section class="contact" id="contact">
      <h1 class="header--all"><span>Contact</span> me</h1>
      <div class="row--contact">
        <div class="content--contact">
          <h3 class="title--contact">Contact info</h3>
          <div class="info--contact">
            <h3><i class="fas fa-envelope"></i>denis-vlaskin0@rambler.ru</h3>
            <h3>
              <el-icon class="icon--contact" :size="35"><PhoneFilled /></el-icon
              >+7 (926) 913-78-03
            </h3>
            <h3>
              <el-icon class="icon--contact" :size="35"
                ><LocationFilled /></el-icon
              >Russia, Moscow
            </h3>
            <h3>
              <i class="fa-brands fa-github"></i>https://github.com/Kararakt
            </h3>
          </div>
        </div>
        <el-form class="form--contact">
          <input type="text" placeholder="Name" class="input--contact" />
          <input type="email" placeholder="Email" class="input--contact" />
          <input type="text" placeholder="Project" class="input--contact" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            class="input--contact textarea--contact"
          ></textarea>

          <button class="btn--home flex justify-center gap-2">
            Send <el-icon><Promotion /></el-icon>
          </button>
        </el-form>
      </div>
    </section>
    <a href="#home" class="top"
      ><img src="../assets/scroll-top-img.png" alt=""
    /></a>
  </div>
</template>

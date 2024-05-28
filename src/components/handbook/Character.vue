<script setup>

</script>

<template>
  <div class="character">
    <div class="chara-bar">
      <div>VBS</div>
    </div>
    <div class="chara-content">
      <!--    这里是角色具体谷子的地方-->
      <div class="chara-a-module">
        <div class="chara-a-cube"><img src="../../assets/img_1.png" alt=""></div>
        <div class="details-intro">
          <p>介绍名字</p>
        </div>
      </div>
      <div class="chara-a-module">
        <div class="chara-a-cube"><img src="../../assets/img_1.png" alt=""></div>
        <div class="details-intro">
          <p>介绍名字</p>
        </div>
      </div>
      <div class="chara-a-module">
        <div class="chara-a-cube"><img src="../../assets/img_1.png" alt=""></div>
        <div class="details-intro">
          <p>介绍名字</p>
        </div>
      </div>
      <div class="chara-a-module">
        <div class="chara-a-cube"><img src="../../assets/img_1.png" alt=""></div>
        <div class="details-intro">
          <p>介绍名字</p>
        </div>
      </div>
      <div class="chara-a-module">
        <div class="chara-a-cube"><img src="../../assets/img_1.png" alt=""></div>
        <div class="details-intro">
          <p>介绍名字</p>
        </div>
      </div>

      <div class="chara-a-module">
        <div class="chara-a-cube"><img src="../../assets/img_1.png" alt=""></div>
        <div class="details-intro">
          <p>Vol.3 三星花前 </p>
        </div>
      </div>
      <div class="chara-a-module">
        <div class="chara-a-cube"><img src="../../assets/img_1.png" alt=""></div>
        <div class="details-intro">
          <p>介绍名字</p>
        </div>
      </div>
      <div class="chara-a-module">
        <div class="chara-a-cube"><img src="../../assets/img_1.png" alt=""></div>
        <div class="details-intro">
          <p>介绍名字</p>
        </div>
      </div>
      <div class="chara-a-module">
        <div class="chara-a-cube"><img src="../../assets/img_1.png" alt=""></div>
        <div class="details-intro">
          <p>介绍名字</p>
        </div>
      </div>
      <div class="chara-a-module">
        <div class="chara-a-cube"><img src="../../assets/img_1.png" alt=""></div>
        <div class="details-intro">
          <p>介绍名字</p>
        </div>
      </div>

      <div class="chara-a-module">
        <div class="chara-a-cube"><img src="../../assets/img_1.png" alt=""></div>
        <div class="details-intro">
          <p>介绍名字</p>
        </div>
      </div>
      <div class="chara-a-module">
        <div class="chara-a-cube"><img src="../../assets/img_1.png" alt=""></div>
        <div class="details-intro">
          <p>介绍名字</p>
        </div>
      </div>
      <div class="chara-a-module">
        <div class="chara-a-cube">

        </div>
        <div class="details-intro">
          <p></p>
        </div>
      </div>
      <div class="chara-a-module">
        <div class="chara-a-cube"><img src="../../assets/img_1.png" alt=""></div>
        <div class="details-intro">
          <p>介绍名字</p>
        </div>
      </div>
      <div class="chara-a-module">
        <div class="chara-a-cube"><img src="../../assets/img_1.png" alt=""></div>
        <div class="details-intro">
          <p>介绍名字</p>
        </div>
      </div>

      <div class="chara-a-module">
        <div class="chara-a-cube"><img src="../../assets/img_1.png" alt=""></div>
        <div class="details-intro">
          <p>介绍名字</p>
        </div>
      </div>
      <div class="chara-a-module">
        <div class="chara-a-cube"><img src="../../assets/img_1.png" alt=""></div>
        <div class="details-intro">
          <p>介绍名字</p>
        </div>
      </div>
      <div class="chara-a-module">
        <div class="chara-a-cube"><img src="../../assets/img_1.png" alt=""></div>
        <div class="details-intro">
          <p>介绍名字</p>
        </div>
      </div>
      <div class="chara-a-module">
        <div class="chara-a-cube"><img src="../../assets/img_1.png" alt=""></div>
        <div class="details-intro">
          <p>介绍名字</p>
        </div>
      </div>
      <div class="chara-a-module">
        <div class="chara-a-cube"><img src="../../assets/img_1.png" alt=""></div>
        <div class="details-intro">
          <p>介绍名字</p>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.chara-content {
  display: flex;
  flex-wrap: wrap;
  border: #909399 1px solid;
  .chara-a-module {
    box-sizing: border-box;
    //margin: 0 -1px -1px 0;
    border: #909399 1px solid;
    width: 10%;
    overflow: hidden;
    display: inline-block;
    .chara-a-cube {
      width: 100%;
      position: relative;
      img {
        position: absolute;
        top: 1%;
        left: 1%;
        width: 98%;
        height: 98%;
        object-fit: cover;
      }

    }

    .chara-a-cube::before {
      content: "";
      padding-top: 100%;
      display: block;
    }

    .details-intro {
      box-sizing: border-box;
      width: 100%;
      max-height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      //margin: -1px -1px -1px -1px;
      //margin-bottom: -1px;
      border-top: darkgray 2px solid;
      p {
        margin: 0;
      }
    }
  }

}

.character {
  width: 100%;
}

.chara-bar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: lightpink;
}
</style>
<!-- Most of this is taken from https://github.com/jeffalo/ocular/blob/main/components/Post.vue -->
<template>
  <div class="container">
    <div class="header">
      <a class="date">{{ time }}</a>
    </div>
    <div class="wrap">
      <section class="main-content">
        <div class="content">
          <Render :content="signature" />
        </div>
        <div class="footer"></div>
      </section>
      <nav class="left-nav">
        <a
          :href="`https://scratch.mit.edu/users/${username}`"
          class="username"
          >{{ username }}</a
        >
        <br />
        <a :href="`https://scratch.mit.edu/users/${username}`"
          ><img
            :src="`https://cdn2.scratch.mit.edu/get_image/user/${userid}_90x90.png`"
            class="pfp"
        /></a>
        <OcularStatus :user="user" />
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  props: ["user", "signature", "time"],
  data() {
    return {
      userid: 0,
      username: "",
      time: "<placeholder>",
    };
  },
  async fetch() {
    let fet = await fetch(
      `https://scratchdb.lefty.one/v3/user/info/${this.user}`
    );

    let json = await fet.json();

    this.userid = json.id;
    this.username = json.username;
  },
  fetchOnServer: false,
};
</script>

<style scoped>
.container {
  margin-bottom: 20px;
}
.wrap {
  display: flex;
  border: 1px solid var(--sidebar-border);
  border-left: none;
}
.main-content {
  order: 2;
  width: 85%;
  background: var(--background);
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;
}
.content {
  display: block;
  width: 100%;
}
.left-nav {
  order: 1;
  width: 15%;
  flex: 0 0 auto;
  background: var(--sidebar-background);
}
.main-content,
.main-sidebar,
.left-nav {
  padding: 0.75em 1em;
  box-shadow: inset 1px 0 var(--sidebar-border);
  overflow-wrap: break-word;
}
.pfp {
  width: 90px;
  height: 90px;
}
.footer {
  line-height: 28px;
  padding-top: 2em;
  align-self: flex-end;
  text-align: right;
  display: block;
  width: 100%;
}
.header {
  background-color: var(--brand);
  padding: 10px;
  font-weight: bold;
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  white-space: nowrap;
}
.rank {
  display: block;
}
.viewon {
  float: right;
  color: var(--text);
  text-decoration: none;
}
.topic-link {
  color: white;
  text-decoration: none;
  padding-left: 10px;
}
.topic {
  float: right;
  color: white;
  text-decoration: none;
}
.username {
  color: var(--text);
  font-weight: bold;
  padding-bottom: 5px;
  display: block;
}
@media only screen and (max-width: 750px) {
  .pfp {
    width: 75%;
    height: auto;
  }
  .left-nav {
    width: 20%;
  }
}
* {
  text-decoration: none;
}
.date {
  color: white;
}
</style>

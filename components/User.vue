<!-- Most of this is taken from https://github.com/jeffalo/ocular/blob/main/components/Post.vue -->
<template>
  <div class="container">
    <div class="header">
      <a class="date">{{ time }}</a>
    </div>
    <div class="wrap">
      <section class="main-content">
        <div class="content" v-if="currentType == 'html'">
          <Render :content="signature" />
        </div>
        <div class="content" v-if="currentType == 'bb'">
          {{ signatureBBCode }}
        </div>
        <div class="footer">
          <a :href="`https://ocular.jeffalo.net/user/${username}`">ocular</a> |
          <a :href="`https://postpercent.rirurin.com/users/${username}`"
            >postpercent</a
          >
          | <button class="link" @click="switchType()">View source</button>
        </div>
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
      currentType: "html",
    };
  },
  async fetch() {
    let fet = await fetch(
      `https://scratchdb.lefty.one/v3/user/info/${this.user}`
    );

    let json = await fet.json();

    this.userid = json.id;
    this.username = json.username;

    document.getElementById(
      "favicon"
    ).href = `https://cdn2.scratch.mit.edu/get_image/user/${json.id}_500x500.png`;
  },
  fetchOnServer: false,
  methods: {
    switchType() {
      this.currentType = this.currentType == "html" ? "bb" : "html";
    },
  },
  computed: {
    signatureBBCode() {
      var html = document.createElement("div");
      html.appendChild(this.signature);
      // new lines
      let lineBreaks = html.querySelectorAll("br");
      for (let br of lineBreaks) br.insertAdjacentText("afterend", "\n");

      // images and smileys
      let smilieReplaces = Object.assign(Object.create(null), {
        smile: ":)",
        neutral: ":|",
        sad: ":(",
        big_smile: ":D",
        yikes: ":o",
        wink: ";)",
        hmm: ":/",
        tongue: ":P",
        lol: ":lol:",
        mad: ":mad:",
        roll: ":rolleyes",
        cool: ":cool:",
      });

      let imgs = html.querySelectorAll("img");
      for (let img of imgs) {
        if (
          /\/\/cdn\.scratch\.mit\.edu\/scratchr2\/static\/__[a-z0-9]{32}__\/djangobb_forum\/img\/smilies\/[a-z_]{3,9}\.png/.test(
            img.src
          )
        ) {
          if (smilieReplaces[img.src.split("smilies/")[1].split(".")[0]]) {
            img.parentNode.insertBefore(
              document.createTextNode(
                smilieReplaces[img.src.split("smilies/")[1].split(".")[0]]
              ),
              img
            );
          } else
            img.parentNode.insertBefore(
              document.createTextNode(`[img${img.src}[/img]`),
              img
            );
        } else
          img.parentNode.insertBefore(
            document.createTextNode(`[img]${img.src}[/img]`),
            img
          );
      }

      // bold, italic, underline, strikethrough, big, small and color
      let bbReplaces = {
        italic: "i",
        bold: "b",
        big: "big",
        small: "small",
        underline: "u",
        strikethrough: "s",
      };
      let spans = html.querySelectorAll("span");
      for (let span of spans) {
        if (span.className.startsWith("bb-")) {
          span.insertAdjacentText(
            "afterbegin",
            `[${bbReplaces[span.className.slice(3)]}]`
          );
          span.insertAdjacentText(
            "beforeend",
            `[/${bbReplaces[span.className.slice(3)]}]`
          );
        } else if (span.style.color) {
          let color = span.style.color;

          function componentToHex(c) {
            var hex = c.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
          }

          function rgbToHex(r, g, b) {
            return (
              "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
            );
          }

          if (color.startsWith("rgb")) {
            let rgbValues = color
              .slice(4, color.length - 1)
              .split(/, ?/)
              .map((x) => Number(x));

            span.insertAdjacentText(
              "afterbegin",
              `[color=${rgbToHex(...rgbValues).toUpperCase()}]`
            );
          } else span.insertAdjacentText("afterbegin", `[color=${color}]`);
          span.insertAdjacentText("beforeend", "[/color]");
        }
      }

      // links
      // todo: try and gues where dictionary/wiki/wp etc. tags are being used?
      let links = html.querySelectorAll("a");
      for (let link of links) {
        link.insertAdjacentText("afterbegin", `[url=${link.href}]`);
        link.insertAdjacentText("beforeend", "[/url]");
      }

      // center
      let divs = html.querySelectorAll("div");
      for (let div of divs) {
        if (div.style.textAlign === "center") {
          div.insertAdjacentText("afterbegin", "[center]");
          div.insertAdjacentText("beforeend", "[/center]");
        }
      }

      // lists
      let lis = html.querySelectorAll("li");
      for (let li of lis) li.textContent = `[*]${li.textContent}`;
      let uls = html.querySelectorAll("ul");
      for (let ul of uls) ul.textContent = `[list]\n${ul.textContent}[/list]\n`;
      let ols = html.querySelectorAll("ol");
      for (let ol of ols)
        ol.textContent = `[list=1]\n${ol.textContent}[/list]\n`;

      // scratchblocks - just get rid of them for now
      // todo: support scratchblocks
      let scratchBlocksPres = html.getElementsByClassName("blocks");
      for (let pre of scratchBlocksPres) {
        pre.textContent = "~scratchblocks~\n";
      }

      // code blocks
      let codeBlocks = html.querySelectorAll("div.code");
      for (let codeBlock of codeBlocks)
        codeBlock.textContent = `[code]\n${codeBlock.textContent}[/code]\n`;

      // quotes
      let quotes = html.querySelectorAll("blockquote");
      for (let quote of quotes) {
        let author = quote.querySelector("p.bb-quote-author");
        if (author)
          quote.textContent = `[quote=${author.textContent.slice(
            0,
            author.textContent.length - 7
          )}]\n${quote.textContent}[/quote]\n`;
        else quote.textContent = `[quote]\n${quote.textContent}[/quote]\n`;
      }

      return html.textContent;
    },
  },
  ssr: false,
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
  height: 300px;
  overflow-x: hidden;
  overflow-y: auto;
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

a {
  cursor: pointer;
}

button.link {
  border: 1px black;
  padding: 5px;
  background: none;
  cursor: pointer;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: bold;
  color: var(--text);
}
</style>

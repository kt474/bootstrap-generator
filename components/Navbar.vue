<template>
  <div class="main">
    <b-navbar toggleable="lg" class="nav-bar">
      <b-navbar-brand href="#" class="nav-bar-text-bold ml-2"
        >NavBar</b-navbar-brand
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <a
            :href="htmlBlob"
            class="nav-bar-text mt-2 ml-2"
            download="bootstrap-generator"
          >
            Export
          </a>

          <b-nav-item class="nav-bar-text"> </b-nav-item>
          <b-nav-item href="#" class="nav-bar-text" @click="openPreview"
            >Preview</b-nav-item
          >
          <b-nav-item href="#" class="nav-bar-text ml-2">Link 3</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="#" class="nav-bar-text mr-2">Settings</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  computed: {
    currentHtml() {
      const htmlStart = `<!DOCTYPE html>
      <html>
        <head>
          <!-- Required meta tags -->
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <!-- Bootstrap CSS -->
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
            crossorigin="anonymous"
          />
          <title>Hello, world!</title>
        </head>
        <body>
        <p>Exported preview</p>
        `
      const htmlEnd = `</body>
      </html>`
      const accordian = `<div id="accordionExample" class="accordion">
            <div class="accordion-item">
              <h2 id="headingOne" class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 id="headingTwo" class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 id="headingThree" class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>`
      if (this.$store.state.currentCanvas.includes('Accordian')) {
        return `${htmlStart}${accordian}${htmlEnd}`
      } else {
        return `${htmlStart}${htmlEnd}`
      }
    },
    htmlBlob() {
      const data = new Blob([this.currentHtml], { type: 'text/html' })
      const textFile = window.URL.createObjectURL(data)
      return textFile
    },
  },
  methods: {
    openPreview() {
      const win = window.open('', 'preview')
      win.document.body.innerHTML = `<!DOCTYPE html>
      <html>
        <head>
          <!-- Required meta tags -->
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <!-- Bootstrap CSS -->
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
            crossorigin="anonymous"
          />
          <title>Hello, world!</title>
        </head>
        <body>
          <div class"container-md">
            <div class="card">
            <div class="card-header">
            Featured
            </div>
            <div class="card-body">
              <h5 class="card-title">This is the preview</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>
        </body>
      </html>`
    },
  },
}
</script>
<style scoped>
.nav-bar {
  background-color: #5e72e4;
  /* padding-bottom: 1rem; */
}
.nav-bar-text-bold {
  color: #fff !important;
  font-weight: bold;
}
.nav-bar-text a {
  color: #fff !important;
}
.nav-bar-text {
  color: #fff !important;
  text-decoration: none;
}
.main {
  width: 100%;
}
</style>

const assert = require("assert");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("DOM Elements", () => {
  let window;

  before(() => {
    const dom = new JSDOM(`
		<!DOCTYPE html>
		<html>
		  <head></head>
		  <body>
			 <input type="text" id="search">
			 <i id="search_icon"></i>
			 <div id="subMenu"></div>
			 <header>
				<div class="slider"></div>
				<div class="slider"></div>
				<div class="slider"></div>
				<h1 id="header_title"></h1>
				<p id="header_pra"></p>
				<span id="header_dur"></span>
				<span id="header_gen"></span>
			 </header>
			 <div id="mvoes_bx_1">
				<div></div>
				<div></div>
				<div></div>
			 </div>
			 <div id="left_scroll1"></div>
			 <div id="right_scroll1"></div>
			 <button id="year"></button>
			 <button id="a_z"></button>
		  </body>
		</html>
	 `);
    window = dom.window;
    global.document = dom.window.document;
    global.window = dom.window;
    global.search_icon = dom.window.document.getElementById("search_icon");
    global.search = dom.window.document.getElementById("search");
    global.subMenu = dom.window.document.getElementById("subMenu");
    global.slider_btn = dom.window.document.getElementsByClassName("slider");
    global.header_title = dom.window.document.getElementById("header_title");
    global.header_pra = dom.window.document.getElementById("header_pra");
    global.header_dur = dom.window.document.getElementById("header_dur");
    global.header_gen = dom.window.document.getElementById("header_gen");
    global.mvoes_bx_1 = dom.window.document.getElementById("mvoes_bx_1");
    global.left_scroll1 = dom.window.document.getElementById("left_scroll1");
    global.right_scroll1 = dom.window.document.getElementById("right_scroll1");
    global.year = dom.window.document.getElementById("year");
    global.a_z = dom.window.document.getElementById("a_z");
  });

  describe("Search Icon", () => {
    it("should toggle the search_input class when clicked", () => {
      const expectedClass = "search_input";
      assert.strictEqual(search.classList.contains(expectedClass), false);
      search_icon.click();
      assert.strictEqual(search.classList.contains(expectedClass), true);
      search_icon.click();
      assert.strictEqual(search.classList.contains(expectedClass), false);
    });
  });

  describe("Sub Menu", () => {
    it("should toggle the open-menu class when clicked", () => {
      const expectedClass = "open-menu";
      assert.strictEqual(subMenu.classList.contains(expectedClass), false);
      toggleMenu();
      assert.strictEqual(subMenu.classList.contains(expectedClass), true);
      toggleMenu();
      assert.strictEqual(subMenu.classList.contains(expectedClass), false);
    });
  });

  describe("Header Slider", () => {
    it("should change the header elements after each slide", (done) => {
      slider_load();
      setTimeout(() => {
        assert.strictEqual(
          header.style.background,
          "url('/img/121214.jpg') no-repeat center center / cover"
        );
        assert.strictEqual(header_dur.innerText, "1h 57min");
        assert.strictEqual(header_title.innerText, "Ant-Man");
        assert.strictEqual(
          header_pra.innerText,
          "Ant-Man is a 2015 American superhero film based on the Marvel Comics characters of the same name: Scott Lang and Hank Pym. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 12th film in the Marvel Cinematic Universe (MCU). The film was directed by Peyton Reed from a screenplay by the writing teams of Edgar Wright and Joe Cornish, and Adam McKay"
        );
        assert.strictEqual(
          slider_btn[0].style.background,
          "rgb(184, 184, 184, 0.1)"
        );
        assert.strictEqual(slider_btn[1].style.background, "#fff");
        assert.strictEqual(
          slider_btn[2].style.background,
          "rgb(184, 184, 184, .1)"
        );
        done();
      }, 3000);
    });
  });

  describe("Movie Box", () => {
    it("should scroll when left or right arrow is clicked", () => {
      const expectedScrollLeft = mvoes_bx_1.scrollLeft - 150;
      assert.strictEqual(mvoes_bx_1.scrollLeft, 0);
      left_scroll1.click();
      assert.strictEqual(mvoes_bx_1.scrollLeft, expectedScrollLeft);
      const expectedScrollRight = mvoes_bx_1.scrollLeft + 150;
      right_scroll1.click();
      assert.strictEqual(mvoes_bx_1.scrollLeft, expectedScrollRight);
    });
  });

  describe("Year Button", () => {
    it("should show/hide year options when clicked", () => {
      const expectedClass = "show_year1";
      assert.strictEqual(year.classList.contains(expectedClass), false);
      year.click();
      assert.strictEqual(year.classList.contains(expectedClass), true);
      year.click();
      assert.strictEqual(year.classList.contains(expectedClass), false);
    });
  });

  describe("A-Z Button", () => {
    it("should show/hide A-Z options when clicked", () => {
      const expectedClass = "show_a_z1";
      assert.strictEqual(a_z.classList.contains(expectedClass), false);
      a_z.click();
      assert.strictEqual(a_z.classList.contains(expectedClass), true);
      a_z.click();
      assert.strictEqual(a_z.classList.contains(expectedClass), false);
    });
  });
});

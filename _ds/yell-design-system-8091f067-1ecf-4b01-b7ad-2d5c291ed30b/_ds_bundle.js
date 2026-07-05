/* @ds-bundle: {"format":4,"namespace":"YELLDesignSystem_8091f0","components":[{"name":"EyebrowLabel","sourcePath":"components/brand/EyebrowLabel.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"NumberedMarker","sourcePath":"components/brand/NumberedMarker.jsx"},{"name":"SectionRule","sourcePath":"components/brand/SectionRule.jsx"},{"name":"StatBlock","sourcePath":"components/brand/StatBlock.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/brand/EyebrowLabel.jsx":"f5272374e164","components/brand/Logo.jsx":"0298dc55d890","components/brand/NumberedMarker.jsx":"718633300569","components/brand/SectionRule.jsx":"0ecd1b77114b","components/brand/StatBlock.jsx":"a82b058f133b","components/core/Button.jsx":"091683addf68","components/core/Card.jsx":"b27d097a8305","components/core/Tag.jsx":"fe36f58a28fc","slides/slides.jsx":"32fa080bac8e","ui_kits/social/SocialKit.jsx":"ab94dd721a61","ui_kits/website/WebsiteHome.jsx":"1f0a647de7e5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.YELLDesignSystem_8091f0 = window.YELLDesignSystem_8091f0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/EyebrowLabel.jsx
try { (() => {
/**
 * YELL eyebrow label — 12px uppercase, letter-spaced, sits above section titles.
 */
function EyebrowLabel({
  children,
  tone = 'muted',
  style
}) {
  const color = tone === 'red' ? 'var(--yell-red)' : tone === 'white' ? 'rgba(255,255,255,0.75)' : 'var(--yell-ink-45)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { EyebrowLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/EyebrowLabel.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
/**
 * YELL logo lockup. Renders the supplied PNG assets — never redraw the spark-bulb mark.
 * `basePath` points at the folder holding the logo PNGs (default "assets").
 *
 * variant: "black"  → wordmark for light backgrounds
 *          "white"  → wordmark for dark/red backgrounds
 *          "mark"   → red-circle spark-bulb mark only
 */
function Logo({
  variant = 'black',
  height = 40,
  basePath = 'assets',
  alt = 'YELL',
  style
}) {
  const file = {
    black: 'logo-yell-black.png',
    white: 'logo-yell-white.png',
    mark: 'logo-mark-red.png'
  }[variant];
  const h = typeof height === 'string' && height.trim() !== '' && !isNaN(height) ? Number(height) : height;
  return /*#__PURE__*/React.createElement("img", {
    src: `${basePath}/${file}`,
    alt: alt,
    style: {
      height: h,
      width: 'auto',
      maxWidth: '100%',
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/NumberedMarker.jsx
try { (() => {
/**
 * YELL numbered marker (01 / 02 / 03). Use ONLY for genuine sequences —
 * curriculum modules, student journey, partnership roadmap. Never for non-sequential grids.
 */
function NumberedMarker({
  n,
  tone = 'red'
}) {
  const num = String(n).padStart(2, '0');
  const color = {
    red: 'var(--yell-red)',
    black: 'var(--yell-black)',
    white: 'var(--yell-white)'
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 32,
      lineHeight: 1,
      letterSpacing: '-0.01em',
      color
    }
  }, num);
}
Object.assign(__ds_scope, { NumberedMarker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/NumberedMarker.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionRule.jsx
try { (() => {
/**
 * YELL section rule — a short ~64px Poppy Red bar used as a section opener accent.
 */
function SectionRule({
  length = 64,
  weight = 3,
  color = 'var(--yell-red)',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: length,
      height: weight,
      background: color,
      borderRadius: weight,
      ...style
    }
  });
}
Object.assign(__ds_scope, { SectionRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionRule.jsx", error: String((e && e.message) || e) }); }

// components/brand/StatBlock.jsx
try { (() => {
/**
 * YELL stat block — the workhorse of every highlights layout.
 * Large display number (Poppy Red, or white on dark) + small uppercase label.
 */
function StatBlock({
  value,
  label,
  tone = 'red',
  align = 'left',
  size = 'md'
}) {
  const sizes = {
    sm: 40,
    md: 56,
    lg: 72
  };
  const numberColor = {
    red: 'var(--yell-red)',
    black: 'var(--yell-black)',
    white: 'var(--yell-white)'
  }[tone];
  const labelColor = tone === 'white' ? 'rgba(255,255,255,0.7)' : 'var(--yell-ink-45)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: sizes[size],
      lineHeight: 1,
      letterSpacing: '-0.01em',
      color: numberColor
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: labelColor
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * YELL primary/secondary/ghost button.
 * Text is a verb of what happens ("Apply now", "Book a call").
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '10px 16px',
      fontSize: 14
    },
    md: {
      padding: '14px 24px',
      fontSize: 16
    },
    lg: {
      padding: '16px 32px',
      fontSize: 18
    }
  };
  const base = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: '0.005em',
    borderRadius: 'var(--radius-button, 8px)',
    border: '2px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background-color 140ms ease, color 140ms ease, border-color 140ms ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--yell-red)',
      color: 'var(--yell-white)',
      borderColor: 'var(--yell-red)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--yell-black)',
      borderColor: 'var(--yell-black)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--yell-black)',
      borderColor: 'transparent'
    },
    inverse: {
      background: 'var(--yell-white)',
      color: 'var(--yell-black)',
      borderColor: 'var(--yell-white)'
    }
  };
  const hoverFor = {
    primary: {
      background: 'var(--yell-red-hover)',
      borderColor: 'var(--yell-red-hover)'
    },
    secondary: {
      background: 'var(--yell-black)',
      color: 'var(--yell-white)'
    },
    ghost: {
      background: 'var(--yell-chalk)'
    },
    inverse: {
      background: 'var(--yell-chalk)',
      borderColor: 'var(--yell-chalk)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const style = {
    ...base,
    ...variants[variant],
    ...(hover && !disabled ? hoverFor[variant] : null)
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: style,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * YELL card container.
 * white | chalk — structural. linen | dark — feature/proof cards.
 */
function Card({
  children,
  surface = 'white',
  className,
  style,
  ...rest
}) {
  const surfaces = {
    white: {
      background: 'var(--yell-white)',
      color: 'var(--yell-black)',
      border: '1px solid var(--yell-line)'
    },
    chalk: {
      background: 'var(--yell-chalk)',
      color: 'var(--yell-black)',
      border: '1px solid var(--yell-line)'
    },
    linen: {
      background: 'var(--yell-linen)',
      color: 'var(--yell-black)',
      border: '1px solid rgba(0,0,0,0.06)'
    },
    dark: {
      background: 'var(--yell-black)',
      color: 'var(--yell-white)',
      border: '1px solid rgba(255,255,255,0.08)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      borderRadius: 'var(--radius-card, 12px)',
      padding: 'var(--space-6, 32px)',
      ...surfaces[surface],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * YELL tag / chip — the one place a fully-pill radius is allowed.
 */
function Tag({
  children,
  tone = 'neutral',
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'var(--yell-chalk)',
      color: 'var(--yell-ink-70)',
      border: '1px solid var(--yell-line)'
    },
    red: {
      background: 'var(--yell-red-tint)',
      color: 'var(--yell-red-hover)',
      border: '1px solid transparent'
    },
    solid: {
      background: 'var(--yell-red)',
      color: 'var(--yell-white)',
      border: '1px solid transparent'
    },
    dark: {
      background: 'var(--yell-black)',
      color: 'var(--yell-white)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      lineHeight: 1,
      padding: '6px 12px',
      borderRadius: 'var(--radius-chip, 999px)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// slides/slides.jsx
try { (() => {
// YELL 16:9 slide samples — shared render helpers, one export per slide type.
const {
  StatBlock,
  EyebrowLabel,
  SectionRule,
  NumberedMarker,
  Logo,
  Tag
} = window.YELLDesignSystem_8091f0;
const ASSETS = '../assets';

// Fixed 1280x720 canvas
function Slide({
  children,
  bg = 'var(--yell-white)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1280,
      height: 720,
      background: bg,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, children);
}
const PAD = 80;

// ---- Title slide (dark) ----
function TitleSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    bg: "var(--yell-black)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: PAD,
      left: PAD
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    height: 34,
    basePath: ASSETS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      bottom: PAD,
      right: PAD
    }
  }, /*#__PURE__*/React.createElement(SectionRule, {
    length: 72,
    weight: 4
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 88,
      lineHeight: 0.98,
      letterSpacing: '-0.02em',
      color: '#fff',
      margin: '28px 0 20px'
    }
  }, "Learn. Build. Sell."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 24,
      lineHeight: 1.4,
      color: 'rgba(255,255,255,0.7)',
      margin: 0,
      maxWidth: 760
    }
  }, "India's first hands-on entrepreneurship programme \u2014 a partnership overview.")));
}

// ---- Stat slide (proof, dark) ----
function StatSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    bg: "var(--yell-black)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: PAD,
      left: PAD,
      right: PAD
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    tone: "white"
  }, "The Rishihood pilot"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 44,
      lineHeight: 1.05,
      color: '#fff',
      margin: '16px 0 0',
      maxWidth: 820
    }
  }, "20 students, 4 live ventures \u2014 read across a room.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      bottom: PAD,
      right: PAD,
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "\u20B945K+",
    label: "Avg revenue / venture",
    tone: "red",
    size: "lg"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "42%",
    label: "Average margin",
    tone: "white",
    size: "lg"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "1,000+",
    label: "Students reached",
    tone: "white",
    size: "lg"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "4",
    label: "Live ventures",
    tone: "white",
    size: "lg"
  })));
}

// ---- Section divider (red field) ----
function SectionSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    bg: "var(--yell-red)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: PAD,
      left: PAD
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    height: 30,
    basePath: ASSETS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      top: '50%',
      transform: 'translateY(-50%)',
      right: PAD
    }
  }, /*#__PURE__*/React.createElement(NumberedMarker, {
    n: 2,
    tone: "white"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 72,
      lineHeight: 1,
      color: '#fff',
      margin: '16px 0 0',
      textTransform: 'uppercase',
      letterSpacing: '-0.01em'
    }
  }, "Graduate as founders")));
}

// ---- Comparison slide (light) ----
function ComparisonSlide() {
  const cell = {
    padding: '28px 32px',
    borderRadius: 12
  };
  return /*#__PURE__*/React.createElement(Slide, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: PAD,
      left: PAD,
      right: PAD
    }
  }, /*#__PURE__*/React.createElement(SectionRule, null), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 44,
      color: 'var(--yell-black)',
      margin: '18px 0 0'
    }
  }, "Study business, or run one.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      right: PAD,
      bottom: PAD,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...cell,
      background: 'var(--yell-chalk)',
      border: '1px solid var(--yell-line)'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Traditional"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '20px 0 0',
      paddingLeft: 20,
      color: 'var(--yell-ink-70)',
      fontSize: 20,
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("li", null, "Case studies and theory"), /*#__PURE__*/React.createElement("li", null, "Graded on exams"), /*#__PURE__*/React.createElement("li", null, "Exposure, not execution"))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...cell,
      background: 'var(--yell-black)'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "solid"
  }, "The YELL way"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '20px 0 0',
      paddingLeft: 20,
      color: '#fff',
      fontSize: 20,
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("li", null, "Real ventures, real customers"), /*#__PURE__*/React.createElement("li", null, "Profit is the only grade"), /*#__PURE__*/React.createElement("li", null, "Keep the margin you make")))));
}

// ---- Big quote (linen) ----
function QuoteSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    bg: "var(--yell-linen)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: PAD,
      left: PAD
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "black",
    height: 28,
    basePath: ASSETS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: PAD,
      right: PAD,
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }, /*#__PURE__*/React.createElement(SectionRule, {
    length: 72,
    weight: 4
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 56,
      lineHeight: 1.08,
      color: 'var(--yell-black)',
      margin: '28px 0 0',
      maxWidth: 960,
      letterSpacing: '-0.01em'
    }
  }, "\"Stop studying business. Start running one.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--yell-ink-45)'
    }
  }, "The YELL promise")));
}
Object.assign(window, {
  Slide,
  TitleSlide,
  StatSlide,
  SectionSlide,
  ComparisonSlide,
  QuoteSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/SocialKit.jsx
try { (() => {
// YELL student-register social post templates (1080×1350 portrait, scaled to fit).
const {
  Logo,
  StatBlock,
  Button
} = window.YELLDesignSystem_8091f0;
const ASSETS = '../../assets';
function Frame({
  children,
  bg
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 360,
      height: 450,
      background: bg,
      borderRadius: 16,
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12)'
    }
  }, children);
}

// 1. Photo post — white ALL-CAPS headline + logo top-right
function PhotoPost() {
  return /*#__PURE__*/React.createElement(Frame, {
    bg: "#111"
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSETS}/photo-closing-deals.jpg`,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.55) 100%)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${ASSETS}/logo-mark-red.png`,
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      height: 38
    },
    alt: "YELL"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 22
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 34,
      lineHeight: 0.98,
      letterSpacing: '-0.01em',
      color: '#fff',
      margin: 0,
      textTransform: 'uppercase'
    }
  }, "Closing the hard deals")));
}

// 2. Red rallying field
function RallyPost() {
  return /*#__PURE__*/React.createElement(Frame, {
    bg: "#FF0000"
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSETS}/logo-yell-white.png`,
    style: {
      position: 'absolute',
      top: 20,
      left: 20,
      height: 26
    },
    alt: "YELL"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 40,
      lineHeight: 0.98,
      color: '#fff',
      textTransform: 'uppercase',
      letterSpacing: '-0.01em'
    }
  }, "Don't just graduate \u2014 graduate as founders.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 28,
      bottom: 26,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 600,
      color: 'rgba(255,255,255,0.9)'
    }
  }, "Learn. Build. Sell."));
}

// 3. Big-number proof post (before/after single vivid number)
function StatPost() {
  return /*#__PURE__*/React.createElement(Frame, {
    bg: "#111"
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSETS}/logo-yell-white.png`,
    style: {
      position: 'absolute',
      top: 20,
      left: 20,
      height: 26
    },
    alt: "YELL"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.6)',
      marginBottom: 14
    }
  }, "One venture, one summer"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 72,
      lineHeight: 0.9,
      color: '#FF0000',
      letterSpacing: '-0.01em'
    }
  }, "\u20B9150", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff'
    }
  }, " \u2192 "), "\u20B91,499"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      color: '#fff',
      marginTop: 18,
      textTransform: 'uppercase',
      lineHeight: 1
    }
  }, "Branding beats commodity.")));
}
function SocialKit() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--yell-chalk)',
      padding: 40,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 16,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 30,
      color: 'var(--yell-black)',
      margin: 0
    }
  }, "Social \u2014 student register"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--yell-ink-45)'
    }
  }, "Instagram 4:5 templates")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--yell-ink-70)',
      maxWidth: 640,
      marginTop: 0
    }
  }, "Punchy, second-person, ALL-CAPS rallying lines. Full red / black fields allowed here \u2014 the energy end of the system."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      flexWrap: 'wrap',
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PhotoPost, null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--yell-ink-45)',
      marginTop: 10
    }
  }, "Documentary photo \xB7 headline lockup")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RallyPost, null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--yell-ink-45)',
      marginTop: 10
    }
  }, "Poppy Red rallying field")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StatPost, null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--yell-ink-45)',
      marginTop: 10
    }
  }, "Single vivid number")))));
}
window.SocialKit = SocialKit;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/SocialKit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteHome.jsx
try { (() => {
// YELL institutional marketing homepage — composed from the DS primitives.
const {
  Button,
  Card,
  Tag,
  StatBlock,
  EyebrowLabel,
  SectionRule,
  NumberedMarker,
  Logo
} = window.YELLDesignSystem_8091f0;
const ASSETS = '../../assets';
function Nav() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--yell-line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '18px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "black",
    height: 30,
    basePath: ASSETS
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32,
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--yell-black)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Programme"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Proof"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "For institutions"), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Book a call"))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 32px 64px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EyebrowLabel, {
    tone: "red"
  }, "India's first hands-on entrepreneurship programme"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 56,
      lineHeight: '60px',
      letterSpacing: '-0.01em',
      color: 'var(--yell-black)',
      margin: '16px 0 20px'
    }
  }, "Your campus launches founders \u2014 not just graduates."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: '28px',
      color: 'var(--yell-ink-70)',
      maxWidth: 520,
      margin: '0 0 28px'
    }
  }, "A turnkey experiential-entrepreneurship layer that strengthens your Innovation Ecosystem score \u2014 with no change to your existing curriculum."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Book a partnership call"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "See the pilot")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "NEP 2020 aligned"), /*#__PURE__*/React.createElement(Tag, null, "No curriculum restructuring"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 14,
      overflow: 'hidden',
      height: 440
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSETS}/photo-closing-deals.jpg`,
    alt: "Students closing a deal in the market",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })));
}
function Proof() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--yell-black)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '64px 32px'
    }
  }, /*#__PURE__*/React.createElement(EyebrowLabel, {
    tone: "white"
  }, "The Rishihood pilot"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 30,
      lineHeight: '38px',
      color: 'var(--yell-white)',
      margin: '12px 0 40px',
      maxWidth: 640
    }
  }, "20 students across 4 live ventures. The numbers are designed to be read across a room."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "\u20B945K+",
    label: "Avg revenue / venture",
    tone: "red"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "42%",
    label: "Average margin",
    tone: "white"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "1,000+",
    label: "Students reached",
    tone: "white"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "4",
    label: "Live ventures",
    tone: "white"
  }))));
}
const MODULES = [{
  t: 'Learn',
  d: 'Foundations of building a venture — the frameworks that actually ship.'
}, {
  t: 'Build',
  d: 'Form a cohort, build a real product, price it for real customers.'
}, {
  t: 'Sell',
  d: 'Run a live pop-up. Close hard deals in the market. Keep the margin.'
}, {
  t: 'Scale',
  d: 'Read your numbers, iterate, and pitch what you built to a room.'
}];
function Curriculum() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionRule, null), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 40,
      lineHeight: '46px',
      color: 'var(--yell-black)',
      margin: '20px 0 40px'
    }
  }, "Learn. Build. Sell."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, MODULES.map((m, i) => /*#__PURE__*/React.createElement(Card, {
    key: m.t,
    surface: i === 3 ? 'linen' : 'white'
  }, /*#__PURE__*/React.createElement(NumberedMarker, {
    n: i + 1
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      lineHeight: '30px',
      color: 'var(--yell-black)',
      margin: '16px 0 8px'
    }
  }, m.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: '24px',
      color: 'var(--yell-ink-70)',
      margin: 0
    }
  }, m.d)))));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--yell-red)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 40,
      lineHeight: '46px',
      color: 'var(--yell-white)',
      margin: '0 0 12px'
    }
  }, "Bring YELL to your campus."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      lineHeight: '28px',
      color: 'rgba(255,255,255,0.9)',
      margin: 0,
      maxWidth: 520
    }
  }, "A single semester. Real ventures. Founders your institution can point to.")), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg"
  }, "Book a call")));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--yell-black)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '40px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    height: 26,
    basePath: ASSETS
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'rgba(255,255,255,0.5)'
    }
  }, "Young Entrepreneurs Learning Labz \xB7 Learn. Build. Sell.")));
}
function WebsiteHome() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--yell-white)'
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Proof, null), /*#__PURE__*/React.createElement(Curriculum, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.WebsiteHome = WebsiteHome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteHome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.EyebrowLabel = __ds_scope.EyebrowLabel;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.NumberedMarker = __ds_scope.NumberedMarker;

__ds_ns.SectionRule = __ds_scope.SectionRule;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

})();

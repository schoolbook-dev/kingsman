const HIGHLIGHT_SELECTION_RE = /\[(.+?)\]/gu;

const cleanTextReplacer = (match, p1) => p1;

const textToMarkup = (text, highlightType) => {
  let matches = 0;
  let spans = [];
  let match;

  while ((match = HIGHLIGHT_SELECTION_RE.exec(text)) !== null) {
    let start = match.index - matches * 2;
    let end = match.index + (match[0].length - 2) - matches * 2;

    matches += 1;

    spans.push([start, end]);
  }

  return {
    marker: {
      type: "highlight",
      options: {
        text: text.replace(HIGHLIGHT_SELECTION_RE, cleanTextReplacer),
        highlight_types: {
          highlight: [highlightType],
        },
      },
    },
    answer: [
      {
        [highlightType]: spans,
      },
    ],
  };
};

module.exports = {
  schema: {
    type: "object",
    properties: {
      text: {
        type: "string",
        title: "text",
      },
      highlightType: {
        type: "string",
        enum: [
          "highlight\u002Fword",
          "highlight\u002Fletter",
          "highlight/stress",
        ],
      },
    },
  },
  uiSchema: {
    text: {
      "ui:widget": "textarea",
    },
  },
  formData: {},
  transform: ({ text, highlightType }) => {
    return textToMarkup(text, highlightType);
  },
};

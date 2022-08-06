const HIGHLIGHT_SELECTION_SU = /\[(.+?)\]/gu
const HIGHLIGHT_SELECTION_PE = /\{(.+?)\}/gu
const HIGHLIGHT_SELECTION_MO = /\|(.+?)\|/gu
const HIGHLIGHT_SELECTION_OB = /\*(.+?)\*/gu
const HIGHLIGHT_SELECTION_AD = /\^(.+?)\^/gu


const cleanTextReplacer = (match, p1) => p1;

const textToMarkup = (text, highlightType) => {
  let matches = 0;
  let spans = [];
  let spans1 =[];
  let spans2 = [];
  let spans3 = [];
  let spans4 = [];
  let match;

  if ((match = HIGHLIGHT_SELECTION_SU.exec(text)) !== null) {
    let start = match.index - matches * 2;
    let end = match.index + (match[0].length - 2) - matches * 2;

    matches += 1;

    spans.push([start, end]);

    matches = 0;
  }

  if ((match = HIGHLIGHT_SELECTION_PE.exec(text)) !== null) {
    let start = match.index - matches * 2;
    let end = match.index + (match[0].length - 2) - matches * 2;

    matches += 1;

    spans1.push([start, end]);

    matches = 0;
  }

  if ((match = HIGHLIGHT_SELECTION_MO.exec(text)) !== null) {
    let start = match.index - matches * 2;
    let end = match.index + (match[0].length - 2) - matches * 2;

    matches += 1;

    spans2.push([start, end]);

    matches = 0;
  }

  if ((match = HIGHLIGHT_SELECTION_OB.exec(text)) !== null) {
    let start = match.index - matches * 2;
    let end = match.index + (match[0].length - 2) - matches * 2;

    matches += 1;

    spans3.push([start, end]);

    matches = 0;
  }

  if ((match = HIGHLIGHT_SELECTION_AD.exec(text)) !== null) {
    let start = match.index - matches * 2;
    let end = match.index + (match[0].length - 2) - matches * 2;

    matches += 1;

    spans4.push([start, end]);

    // matches = 0;
  }


  return {
    marker: {
      type: "highlight",
      options: {
        text: 
            text.replace(HIGHLIGHT_SELECTION_SU, cleanTextReplacer),
        highlight_types: {
          highlight: [highlightType],
        },
      },
    },
    answer: [
      {
        "syntax\u002Fsubject": spans,
        "syntax\u002Fpredicate": spans1,
        "syntax\u002Fmodifier": spans2,
        "syntax\u002Fobject": spans3,
        "syntax\u002Fadverbial": spans4,
      },
    ],
  };
};


module.exports = {
  schema: {
    description: "[] – подлежащее, {} – сказуемое, || - определение, ** - дополнение, ^^ - обстоятельство",
    type: "object",
    properties: {
      text: {
        type: "string",
        title: "text",
      },
    //   highlightType: {
    //     type: "string",
    //     anyOf: [
    //         {
    //           type: "string",
    //           enum: ["syntax\u002Fsubject"],
    //           title: "Выделение подлежащего",
    //         },
    //         {
    //           type: "string",
    //           enum: ["syntax\u002Fpredicate"],
    //           title: "Выделение сказуемого",
    //         },
    //         {
    //           type: "string",
    //           enum: ["syntax\u002Fmodifier"],
    //           title: "Выделение определения",
    //         },
    //         {
    //             type: "string",
    //             enum: ["syntax\u002Fobject"],
    //             title: "Выделение дополнения",
    //           },
    //           {
    //             type: "string",
    //             enum: ["yntax\u002Fadverbial"],
    //             title: "Выделение обстоятельства",
    //           },
    //       ]
    //   },
    
    highlightType: {
        type: "array",
        title: "Выберите часть предложения",
        uniqueItems: true,
        maxItems: 5,
        items: {
          type: "string",
          anyOf: [
                              {
                      type: "string",
                      enum: ["syntax\u002Fsubject"],
                      title: "Выделение подлежащего",
                    },
                    {
                      type: "string",
                      enum: ["syntax\u002Fpredicate"],
                      title: "Выделение сказуемого",
                    },
                    {
                      type: "string",
                      enum: ["syntax\u002Fmodifier"],
                      title: "Выделение определения",
                    },
                    {
                        type: "string",
                        enum: ["syntax\u002Fobject"],
                        title: "Выделение дополнения",
                      },
                      {
                        type: "string",
                        enum: ["syntax\u002Fadverbial"],
                        title: "Выделение обстоятельства",
                      },
                    ]
        },
      },
    //   items: {
    //     type: "array",
    //     items: {
    //       type: "object",
    //       properties: {
    //         highlightType1: {
    //             type: "string",
    //             anyOf: [
    //                 {
    //                   type: "string",
    //                   enum: ["syntax\u002Fsubject"],
    //                   title: "Выделение подлежащего",
    //                 },
    //                 {
    //                   type: "string",
    //                   enum: ["syntax\u002Fpredicate"],
    //                   title: "Выделение сказуемого",
    //                 },
    //                 {
    //                   type: "string",
    //                   enum: ["syntax\u002Fmodifier"],
    //                   title: "Выделение определения",
    //                 },
    //                 {
    //                     type: "string",
    //                     enum: ["syntax\u002Fobject"],
    //                     title: "Выделение дополнения",
    //                   },
    //                   {
    //                     type: "string",
    //                     enum: ["yntax\u002Fadverbial"],
    //                     title: "Выделение обстоятельства",
    //                   },
    //               ]
    //           },
    //       },
    //     },
    //   },
    },
  },
  uiSchema: {
    text: {
      "ui:widget": "textarea",
    },
  },
  formData: {},
  transform: ({ text, highlightType}) => {
    return textToMarkup(text, highlightType);
  },
};

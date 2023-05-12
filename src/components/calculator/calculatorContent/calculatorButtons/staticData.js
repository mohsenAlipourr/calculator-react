export const getButtons = (
  handelButtonValues,
  equal,
  reset,
  backspace,
  isLightTheme
) => {
  const buttons = [
    {
      onClick: reset,
      title: "AC",

      className: "colorGreen",
    },
    {
      onClick: reset,
      title: <img src="/icon/plusMinus.png" />,

      className: "colorGreen",
    },
    {
      onClick: () =>
        handelButtonValues({ value: "%", title: "%", type: "operator" }),

      title: "%",
      className: "colorGreen",
    },
    {
      onClick: () =>
        handelButtonValues({ value: "/", title: "/", type: "operator" }),

      title: "÷",
      className: "colorRed",
    },
    {
      onClick: () =>
        handelButtonValues({ value: 7, title: "7", type: "number" }),

      title: "7",
    },
    {
      onClick: () =>
        handelButtonValues({ value: 8, title: "8", type: "number" }),

      title: "8",
    },
    {
      onClick: () =>
        handelButtonValues({ value: 9, title: "9", type: "number" }),

      title: "9",
    },
    {
      onClick: () =>
        handelButtonValues({ value: "*", title: "*", type: "operator" }),

      title: "*",
      className: "colorRed",
    },
    {
      onClick: () =>
        handelButtonValues({ value: 4, title: "4", type: "number" }),

      title: "4",
    },
    {
      onClick: () =>
        handelButtonValues({ value: 5, title: "5", type: "number" }),

      title: "5",
    },
    {
      onClick: () =>
        handelButtonValues({ value: 6, title: "6", type: "number" }),

      title: "6",
    },
    {
      onClick: () =>
        handelButtonValues({ value: "-", title: "-", type: "operator" }),

      title: "-",
      className: "colorRed",
    },
    {
      onClick: () =>
        handelButtonValues({ value: 1, title: "1", type: "number" }),

      title: "1",
    },
    {
      onClick: () =>
        handelButtonValues({ value: 2, title: "2", type: "number" }),

      title: "2",
    },
    {
      onClick: () =>
        handelButtonValues({ value: 3, title: "3", type: "number" }),

      title: "3",
    },
    {
      onClick: () =>
        handelButtonValues({ value: "+", title: "+", type: "operator" }),

      title: "+",
      className: "colorRed",
    },
    {
      onClick: backspace,
      title: (
        <img
          src={` ${
            !isLightTheme ? "/icon/backspace.png" : "/icon/backspace1.png"
          }`}
        />
      ),

      className: "colorGreen",
    },
    {
      onClick: () =>
        handelButtonValues({ value: 0, title: "0", type: "number" }),

      title: "0",
    },
    {
      onClick: () =>
        handelButtonValues({ value: ".", title: ".", type: "operator" }),

      title: ".",
    },
    {
      onClick: equal,

      title: "=",
      className: "colorRed",
    },
  ];
  return buttons;
};

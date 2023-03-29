import Icon from "./Icon";

function LetterIcon() {
  return (
    <Icon>
      <img
        src="data:image/png;base64,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"
        alt=""
      />
    </Icon>
  );
}

export default LetterIcon;
export function createRichTextModel(model) {
  if (!model) {
    return null;
  }
  return {
    text: model.primary.text.richText,
  };
}

export function createTitleModel(model) {
  if (!model) {
    return null;
  }
  return {
    text: model.primary.text.richText,
    description: model.primary.description.richText,
    aside: model.primary.aside.richText,
  };
}

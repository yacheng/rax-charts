export default class Area {
  static draw = (chart, props) => {
    const {position, color, shape, style} = props;

    let area = chart.area();

    color && area.color(color);
    position && area.position(position);
    shape && area.shape(shape);
    style && area.style(style);
  };
}

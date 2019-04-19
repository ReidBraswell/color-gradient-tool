import * as React from 'react';
import ReactTooltip from 'react-tooltip';

import generateBackgroundColor from './../utilities/generateBackgroundColor';
import Dot from './Dot';

import './DotGrid.scss';

interface IDotGridProps {
  colorRampStyle: string;
  fontSize: string;
  hue: number;
  showWcagContrast: boolean;
  showGrayscale: boolean;
  showColorRamps: boolean;
}

class DotGrid extends React.Component<IDotGridProps> {
  public shouldComponentUpdate(nextProps: IDotGridProps) {
    if (
      this.props.colorRampStyle !== nextProps.colorRampStyle ||
      this.props.fontSize !== nextProps.fontSize ||
      this.props.hue !== nextProps.hue ||
      this.props.showColorRamps !== nextProps.showColorRamps ||
      this.props.showGrayscale !== nextProps.showGrayscale ||
      this.props.showWcagContrast !== nextProps.showWcagContrast
    ) {
      return true;
    }

    return false;
  }

  public render() {
    const {
      colorRampStyle,
      fontSize,
      hue,
      showWcagContrast,
      showGrayscale,
      showColorRamps,
    } = this.props;
    const dots = [];
    for (let v = 100; v >= 0; v -= 1) {
      for (let s = 0; s <= 100; s += 1) {
        const backgroundColor = generateBackgroundColor({
          colorRampStyle,
          fontSize,
          h: hue,
          s: s / 100,
          showColorRamps,
          showGrayscale,
          showWcagContrast,
          v: v / 100,
        });
        dots.push(<Dot key={`${v}-${s}`} backgroundColor={backgroundColor} />);
      }
    }

    return (
      <React.Fragment>
        <section className="dot-grid">{dots}</section>
        <ReactTooltip id="grid-tooltip" effect="solid" />
      </React.Fragment>
    );
  }
}

export default DotGrid;

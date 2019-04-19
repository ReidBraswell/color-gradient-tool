import * as React from 'react';

interface IWcagControlsProps {
  showWcagContrast: boolean;
  handleWcagContrastChange: (e: React.FormEvent<EventTarget>) => void;
  fontSize: string;
  handleFontSizeChange: (e: React.FormEvent<EventTarget>) => void;
}

class WcagControls extends React.Component<IWcagControlsProps> {
  public shouldComponentUpdate(nextProps: IWcagControlsProps) {
    if (
      this.props.showWcagContrast !== nextProps.showWcagContrast ||
      this.props.fontSize !== nextProps.fontSize
    ) {
      return true;
    }

    return false;
  }

  public render() {
    const {
      showWcagContrast,
      handleWcagContrastChange,
      fontSize,
      handleFontSizeChange,
    } = this.props;
    return (
      <form noValidate={true}>
        <fieldset>
          <legend>WCAG Controls</legend>
          <div>
            <input
              id="showWcagContrast"
              name="showWcagContrast"
              type="checkbox"
              checked={showWcagContrast}
              onChange={handleWcagContrastChange}
            />
            <label htmlFor="showWcagContrast">WCAG Contrast</label>
          </div>
          <fieldset disabled={!showWcagContrast}>
            <legend>Font Size</legend>
            <div>
              <input
                id="14"
                type="radio"
                name="fontSize"
                value="14"
                checked={fontSize === '14'}
                onChange={handleFontSizeChange}
              />
              <label htmlFor="14">14pt</label>
            </div>
            <div>
              <input
                id="18"
                type="radio"
                name="fontSize"
                value="18"
                checked={fontSize === '18'}
                onChange={handleFontSizeChange}
              />
              <label htmlFor="18">18pt</label>
            </div>
          </fieldset>
        </fieldset>
      </form>
    );
  }
}

export default WcagControls;

import React, {PureComponent, PropTypes} from 'react';
import autobind from 'autobind-decorator';
import HelpTooltip from '../help-tooltip';

@autobind
class General extends PureComponent {
  _handleUpdateSetting (e) {
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    if (e.target.type === 'number') {
      value = parseInt(value, 10);
    }

    this.props.updateSetting(e.target.name, value);
  }

  render () {
    const {settings} = this.props;
    return (
      <div>
        <div className="form-control form-control--thin">
          <label className="inline-block">Follow redirects automatically
            <input type="checkbox"
                   name="followRedirects"
                   checked={settings.followRedirects}
                   onChange={this._handleUpdateSetting}/>
          </label>
        </div>

        <div className="form-control form-control--thin">
          <label className="inline-block">Validate SSL Certificates
            <input type="checkbox"
                   name="validateSSL"
                   checked={settings.validateSSL}
                   onChange={this._handleUpdateSetting}/>
          </label>
        </div>

        <div className="form-control form-control--thin">
          <label className="inline-block">Show passwords in plain-text
            <input type="checkbox"
                   name="showPasswords"
                   checked={settings.showPasswords}
                   onChange={this._handleUpdateSetting}/>
          </label>
        </div>

        <div className="form-control form-control--thin">
          <label className="inline-block">Use bulk header editor by default
            <input type="checkbox"
                   name="useBulkHeaderEditor"
                   checked={settings.useBulkHeaderEditor}
                   onChange={this._handleUpdateSetting}/>
          </label>
        </div>

        <div className="form-control form-control--thin">
          <label className="inline-block">Always use vertical layout
            <input type="checkbox"
                   name="forceVerticalLayout"
                   checked={settings.forceVerticalLayout}
                   onChange={this._handleUpdateSetting}/>
          </label>
        </div>

        <div className="form-control form-control--thin">
          <label className="inline-block">Wrap Long Lines
            <input type="checkbox"
                   name="editorLineWrapping"
                   checked={settings.editorLineWrapping}
                   onChange={this._handleUpdateSetting}/>
          </label>
        </div>

        <div className="form-row">
          <div className="form-control form-control--outlined pad-top-sm">
            <label>Text Editor Font Size (px)
              <input type="number"
                     name="editorFontSize"
                     min={8}
                     max={20}
                     defaultValue={settings.editorFontSize}
                     onChange={this._handleUpdateSetting}/>
            </label>
          </div>

          <div className="form-control form-control--outlined pad-top-sm">
            <label>Text Editor Indent Size
                <input type="number"
                       name="editorIndentSize"
                       min={1}
                       max={16}
                       defaultValue={settings.editorIndentSize}
                       onChange={this._handleUpdateSetting}/>
            </label>
          </div>

          <div className="form-control form-control--outlined pad-top-sm">
            <label>Text Editor Key Map
              <select defaultValue={settings.editorKeyMap}
                      name="editorKeyMap"
                      onChange={this._handleUpdateSetting}>
                <option value="default">Default</option>
                <option value="vim">Vim</option>
                <option value="emacs">Emacs</option>
              </select>
            </label>
          </div>
        </div>

        <div className="form-control form-control--outlined">
          <label>Network Request Timeout
            <HelpTooltip className="space-left">
              Request timeout in milliseconds (0 for no timeout)
            </HelpTooltip>
            <input type="number"
                   name="timeout"
                   min={0}
                   defaultValue={settings.timeout}
                   onChange={this._handleUpdateSetting}/>
          </label>
        </div>
        <hr className="pad-top"/>

        <h2>
          HTTP Network Proxy
          <HelpTooltip className="space-left txt-md" style={{maxWidth: '20rem', lineWrap: 'word'}}>
            Enable global network proxy. Supports authentication via Basic Auth, digest, or NTLM
          </HelpTooltip>
        </h2>

        <div className="form-control form-control--thin">
          <label className="inline-block">Enable Proxy
            <input type="checkbox"
                   name="proxyEnabled"
                   checked={settings.proxyEnabled}
                   onChange={this._handleUpdateSetting}/>
          </label>
        </div>

        <div className="form-row pad-top-sm">
          <div className="form-control form-control--outlined">
            <label>HTTP Proxy
              <input type="text"
                     name="httpProxy"
                     disabled={!settings.proxyEnabled}
                     placeholder="localhost:8005"
                     defaultValue={settings.httpProxy}
                     onChange={this._handleUpdateSetting}/>
            </label>
          </div>
          <div className="form-control form-control--outlined">
            <label>HTTPS Proxy
              <input placeholder="localhost:8005"
                     disabled={!settings.proxyEnabled}
                     name="httpsProxy"
                     type="text"
                     defaultValue={settings.httpsProxy}
                     onChange={this._handleUpdateSetting}/>
            </label>
          </div>
        </div>
        <br/>
      </div>
    );
  }
}

General.propTypes = {
  settings: PropTypes.object.isRequired,
  updateSetting: PropTypes.func.isRequired
};

export default General;

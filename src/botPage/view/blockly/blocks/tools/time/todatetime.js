import { translate } from '../../../../../../common/i18n';

Blockly.Blocks.todatetime = {
    init: function init() {
        this.appendDummyInput();
        this.appendValueInput('TIMESTAMP').appendField(translate('To Date/Time'));
        this.setInputsInline(true);
        this.setOutput(true, 'String');
        this.setColour('#dedede');
        this.setTooltip(
            translate(
                'Converts a string representing a date/time string into seconds since Epoch. Input format: yyyy-mm-dd hh:mm:ss'
            )
        );
    },
};

Blockly.JavaScript.todatetime = block => {
    const timestamp = Blockly.JavaScript.valueToCode(block, 'TIMESTAMP', Blockly.JavaScript.ORDER_ATOMIC);
    // eslint-disable-next-line no-underscore-dangle
    const functionName = Blockly.JavaScript.provideFunction_('timestampToDateString', [
        // eslint-disable-next-line no-underscore-dangle
        `function ${Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(timestamp) {
            return Bot.toDateTime(timestamp);
        }`,
    ]);

    const code = `${functionName}(${timestamp})`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

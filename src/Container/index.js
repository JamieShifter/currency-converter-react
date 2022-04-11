import { MainContainer, LabelText, FormField, FormLabel } from "./styled";

const Container = ({ currencies, title, input, amount, onAmountChange, result, inputCurrency, onInputCurrencyChange, outputCurrency, onOutputCurrencyChange, onResultChange }) => {

    const preventKeyPressNegative = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };

    const preventPasteNegative = (e) => {
        const clipboardData = e.clipboardData || window.clipboardData;
        const pastedData = parseFloat(clipboardData.getData('text'));
    
        if (pastedData < 0) {
            e.preventDefault();
        }
    };
    

    return (
        <MainContainer>
                <FormLabel>
                    <LabelText>{title}:</LabelText>
                    <FormField
                        value={input ? inputCurrency : outputCurrency}
                        onChange={input ? onInputCurrencyChange : onOutputCurrencyChange}
                        name="from">
                        {Object.entries(currencies).map(currency => (
                            <option key={currency[0]} value={currency[0]}>{currency[0]}</option>
                        ))}
                    </FormField>
                </FormLabel>
                <FormLabel>
                    <LabelText>{!input ? "Result " : ""}Amount:</LabelText>
                    {input ?
                        <FormField
                            as="input"
                            required type="number"
                            name="fromAmount"
                            step="0.01"
                            min="0"
                            onPaste={preventPasteNegative}
                            onKeyPress={preventKeyPressNegative}
                            value={amount}
                            onChange={onAmountChange} />
                        :
                        <LabelText styledResult>{result}</LabelText>
                    }
                </FormLabel>
        </MainContainer>
    );
};

export default Container;
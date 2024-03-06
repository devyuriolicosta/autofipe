import React from 'react';
import Navigator from '_navigations';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';

const App = () => {
    return (
        <AutocompleteDropdownContextProvider>
            <Navigator />
        </AutocompleteDropdownContextProvider>
    );
}
export default App;

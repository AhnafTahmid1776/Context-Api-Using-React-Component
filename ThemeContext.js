import React, {createContext} from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component{
    state = {
      isDarkTheme: true,
      lightTheme: {
          color:'#222',
          background:'#d8ddf1'
      },
      darkTheme:{
          color:'#fff',
          background:'#5c5c5c'
      }
      
      }
      changeTheme = () => {
        this.setState({ isDarkTheme: !this.state.isDarkTheme})

    };
    render(){
        return(
        <ThemeContext.Provider value={{...this.state,changeTheme:this.changeTheme}}>
        {this.props.children}
        </ThemeContext.Provider>
        );
    }
}
export default ThemeContextProvider;
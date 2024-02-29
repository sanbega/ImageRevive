import React from "react";
import * as WebBrowser from "expo-web-browser";//libreria para la autenticacion con gmail
 // esto es para la autenticacion con Gmail
export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};
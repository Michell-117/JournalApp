import { CssBaseline, ThemeProvider } from "@mui/material"

import pinkTheme from "./pinkTheme"
// import { ThemeProvider } from "@emotion/react"

export const AppTheme = ({children}) => {

  return (
    <ThemeProvider theme={pinkTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
    </ThemeProvider>
  )
}


// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "react": async () => {
          let pkg = await import("__mf__virtual/shell__prebuild__react__prebuild__.js")
          return pkg
        }
      ,
        "react-dom": async () => {
          let pkg = await import("__mf__virtual/shell__prebuild__react_mf_2_dom__prebuild__.js")
          return pkg
        }
      ,
        "styled-components": async () => {
          let pkg = await import("__mf__virtual/shell__prebuild__styled_mf_2_components__prebuild__.js")
          return pkg
        }
      ,
        "@reduxjs/toolkit": async () => {
          let pkg = await import("__mf__virtual/shell__prebuild___mf_0_reduxjs_mf_1_toolkit__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "react": {
            name: "react",
            version: "19.0.0",
            scope: ["default"],
            loaded: false,
            from: "shell",
            async get () {
              usedShared["react"].loaded = true
              const {"react": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^19.0.0"
            }
          }
        ,
          "react-dom": {
            name: "react-dom",
            version: "19.0.0",
            scope: ["default"],
            loaded: false,
            from: "shell",
            async get () {
              usedShared["react-dom"].loaded = true
              const {"react-dom": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^19.0.0"
            }
          }
        ,
          "styled-components": {
            name: "styled-components",
            version: "6.1.15",
            scope: ["default"],
            loaded: false,
            from: "shell",
            async get () {
              usedShared["styled-components"].loaded = true
              const {"styled-components": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^6.1.15"
            }
          }
        ,
          "@reduxjs/toolkit": {
            name: "@reduxjs/toolkit",
            version: "2.6.0",
            scope: ["default"],
            loaded: false,
            from: "shell",
            async get () {
              usedShared["@reduxjs/toolkit"].loaded = true
              const {"@reduxjs/toolkit": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^2.6.0"
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      
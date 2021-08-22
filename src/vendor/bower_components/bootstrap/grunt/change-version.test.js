const rewire = require("rewire")
const change_version = rewire("./change-version")
const walkAsync = change_version.__get__("walkAsync")
const main = change_version.__get__("main")
// @ponicode
describe("walkAsync", () => {
    test("0", () => {
        let callFunction = () => {
            walkAsync(["/usr/ports", "/usr/share", "/opt/share", "/opt/share", "/opt/share"], "Inc", "navix377.py", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            walkAsync(["/usr/ports", "/selinux", "/usr/sbin", "/opt/share", "/usr/sbin"], "Inc", "./data/population.csv", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            walkAsync(["/opt/share", "/opt/share", "/usr/ports", "/usr/ports", "/opt/share"], "Inc", "./data/population.csv", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            walkAsync(["/usr/share", "/opt/share", "/selinux", "/opt/share", "/usr/ports"], "and Sons", "decoder.hh", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            walkAsync(["/usr/share", "/usr/sbin", "/usr/share", "/opt/share", "/usr/ports"], "and Sons", ":", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            walkAsync(undefined, undefined, "", undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("main", () => {
    test("0", () => {
        let callFunction = () => {
            main(["Corporate", "Future", "Legacy", "Legacy", "Future", "Corporate", "Corporate", "Legacy", "Legacy", "District", "Corporate", "District", "Future", "Legacy", "Future", "Corporate", "Corporate", "District", "Legacy", "Corporate"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            main(["Legacy", "Legacy", "Future", "Future", "Legacy", "Legacy", "District", "District", "District", "District", "Corporate", "Legacy", "Corporate", "Corporate", "Legacy", "Legacy", "District", "Legacy", "Future", "District"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            main(["Corporate", "Future", "Corporate", "Future", "Legacy", "Corporate", "Future", "Legacy", "Corporate", "District", "District", "District", "Corporate", "District", "Legacy", "Future", "District", "Corporate", "Future", "Future"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            main(["Corporate", "Corporate", "Future", "Legacy", "Corporate", "District", "Legacy", "Corporate", "Legacy", "Future", "Future", "Legacy", "Future", "Legacy", "Legacy", "Legacy", "Legacy", "District", "District", "Legacy"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            main(["District", "Legacy", "Legacy", "Legacy", "Future", "District", "District", "Legacy", "District", "Legacy", "Legacy", "Legacy", "Future", "Legacy", "Corporate", "Future", "Future", "Corporate", "District", "Future"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            main(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

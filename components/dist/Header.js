"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var router_1 = require("next/router");
var react_2 = require("next-auth/react");
var Header = function () {
    var router = router_1.useRouter();
    var isActive = function (pathname) {
        return router.pathname === pathname;
    };
    var _a = react_2.useSession(), session = _a.data, status = _a.status;
    var left = (react_1["default"].createElement("div", { className: "left" },
        react_1["default"].createElement(link_1["default"], { href: "/" },
            react_1["default"].createElement("span", { className: "bold", "data-active": isActive("/") }, "Feed")),
        react_1["default"].createElement("style", { jsx: true }, "\n        .bold {\n          font-weight: bold;\n        }\n\n        span {\n          color: #000;\n          display: inline-block;\n          text-decoration: none;\n        }\n\n        .left a[data-active=\"true\"] {\n          color: gray;\n        }\n\n        span + span {\n          margin-left: 1rem;\n        }\n      ")));
    var right = null;
    if (status === 'loading') {
        left = (react_1["default"].createElement("div", { className: 'left' },
            react_1["default"].createElement(link_1["default"], { href: "/" },
                react_1["default"].createElement("span", { className: 'bold', "data-active": isActive('/') }, "Feed")),
            react_1["default"].createElement("style", { jsx: true }, "\n          .bold {\n            font-weight: bold;\n          }\n          .span {\n            color: var(--geist-foreground);\n            display: inline-block;\n            text-decoration: none;\n          }\n          .left a[data-active='true'] {\n            color: gray\n          }\n          span + span {\n            margin-left: 1rem\n          }\n        ")));
        right = (react_1["default"].createElement("div", { className: 'right' },
            react_1["default"].createElement("p", null, "Validating session..."),
            react_1["default"].createElement("style", { jsx: true }, "\n          .right {\n            margin-left: auto;\n          }\n        ")));
    }
    if (!session) {
        right = (react_1["default"].createElement("div", { className: 'right' },
            react_1["default"].createElement(link_1["default"], { href: "/api/auth/signin" },
                react_1["default"].createElement("span", { "data-active": isActive('/signup') }, "Log in")),
            react_1["default"].createElement("style", { jsx: true }, "\n          span {\n            color: var(--geist-foreground);\n            display: inline-block;\n            text-decoration: none;\n          }\n          span + span {\n            margin-left: 1rem;\n          }\n          .right {\n            margin-left: auto;\n          }\n          .right span {\n            border: 1px solid var(--geist-foreground);\n            border-radius: 3px;\n            padding: 0.5rem 1rem;\n          }\n        ")));
    }
    if (session) {
        left = (react_1["default"].createElement("div", { className: 'left' },
            react_1["default"].createElement(link_1["default"], { href: '/' },
                react_1["default"].createElement("span", { className: 'bold', "data-active": isActive('/') }, "Feed")),
            react_1["default"].createElement(link_1["default"], { href: '/drafts' },
                react_1["default"].createElement("span", { "data-active": isActive('/drafts') }, "My Drafts")),
            react_1["default"].createElement("style", { jsx: true }, "\n          .bold {\n            font-weight: bold;\n          }\n          span {\n            color: var(--geist-foreground);\n            display: inline-block;\n            text-decoration: none;\n          }\n          .left a[data-active='true'] {\n            color: gray;\n          }\n          span + span {\n            margin-left: 1rem;\n          }\n        ")));
        right = (react_1["default"].createElement("div", { className: 'right' },
            react_1["default"].createElement("p", null,
                session.user.name,
                " (",
                session.user.email,
                ")"),
            react_1["default"].createElement(link_1["default"], { href: "/create" },
                react_1["default"].createElement("button", null,
                    react_1["default"].createElement("span", null, "New post"))),
            react_1["default"].createElement("button", { onClick: function () { return react_2.signOut(); } },
                react_1["default"].createElement("a", null, "Log Out")),
            react_1["default"].createElement("style", { jsx: true }, "\n          span {\n            color: var(--geist-foreground);\n            display: inline-block;\n            text-decoration: none;\n          }\n          p {\n            display: inline-block;\n            font-size: 1.3rem;\n            padding-right: 1rem;\n          }\n          span + span {\n            margin-left: 1rem;\n          }\n          .right {\n            margin-left: auto;\n          }\n          .right span {\n            border: 1px solid var(--geist-foreground);\n            border-radius: 3px;\n            padding: 0.5rem 1rem;\n          }\n          button {\n            border: none;\n          }\n        ")));
    }
    return (react_1["default"].createElement("nav", null,
        left,
        right,
        react_1["default"].createElement("style", { jsx: true }, "\n        nav {\n          align-items: center;\n          display: flex;\n          padding: 2rem;\n        }\n      ")));
};
exports["default"] = Header;

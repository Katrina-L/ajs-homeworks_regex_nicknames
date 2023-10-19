import Validator from "../validateUserName";

test.each([
    ["q_wE6Rt-y", true],
    ["qwЕrty", false], //  наличие криллицы "Е"
    ["3qwerty", false],
    ["qwerty3", false],
    ["qwerty_", false],
    ["_qwerty", false],
    ["-qwerty", false],
    ["qwerty-", false],
    ["qw77e88r99ty", true],
    ["qwe8888rty", false],
    ["qwe@rty", false],
])("Testing userName", (UserName, expectedValue) => {
    const object = new Validator();
    expect(object.validateUserName(UserName)).toBe(expectedValue);
});
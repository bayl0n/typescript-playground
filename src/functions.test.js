const canDrive = require('./functions');

test('Return truthy for 18', () => {
    expect(canDrive(18)).toBeTruthy();
});

test('Return truthy for 16', () => {
    expect(canDrive(16)).toBeTruthy();
});

test('Return falsy for 13', () => {
    expect(canDrive(13)).toBeFalsy();
});


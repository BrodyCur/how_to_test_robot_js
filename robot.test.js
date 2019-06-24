const {newRobot, station, isWorkday, prioritizeTasks}  = require("./robot.js");

// newRobot(needs_repairs, foreign_model, vintage_model)

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
  // arrange
const testRobot = newRobot(true, true, false);
// act
const result = station(testRobot);
  // assert
expect(result).toBe(1);
});

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
  // arrange
const testRobot = newRobot(true, false, true);
  // act
const result = station(testRobot);
  // assert
  expect(result).toBe(2);
});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  // arrange
  const testRobot = newRobot(true, false, false);
  // act
  const result = station(testRobot);
  // assert
  expect(result).toBe(3);
});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {
  // arrange
  const testRobot = newRobot(false, false, false);
  const testRobot2 = newRobot(false, true, true);
  // act
  const result = station(testRobot);
  const result2 = station(testRobot2);
  // assert
  expect(result).toBe(4);
  expect(result2).toBe(4);
});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  // arrange
  const testRobot = newRobot(false, false, false);
  // act
  const result = prioritizeTasks(testRobot);
  // assert
  expect(result).toBe(-1);
})

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  // arrange
  const testRobot = newRobot(false, false, false);
  testRobot.todos = [28, 1000, 1, 43, 1234];
  // act
  const result = prioritizeTasks(testRobot);
  // assert
  expect(result).toBe(1234);
});

test('test_workday_on_day_off_returns_false', () => {
  // arrange
  const testRobot = newRobot(false, false, false);
  testRobot.dayOff = 'Friday';
  // act
  const result = isWorkday(testRobot, 'Friday');
  // assert
  expect(result).toBe(false);
});

test('test_workday_not_day_off_returns_true', () => {
  // arrange
  const testRobot = newRobot(false, false, false);
  testRobot.dayOff = 'Friday';
  // act
  const result = isWorkday(testRobot, 'Tuesday');
  // assert
  expect(result).toBe(true);
});

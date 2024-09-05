export default function createReportObject(employeesList) {
  return {
    average: employeesList.reduce((acc, employee) => acc + employee.salary, 0) / employeesList.length,
  };
}

package com.example.EM.project.Controller;






import java.util.List;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.EM.project.Model.Employee;
import com.example.EM.project.Service.EmployeeService;


@RestController
@CrossOrigin("http://localhost:3000/")
public class EmpContoller {
	
	@Autowired
	
	EmployeeService employeeService;
	
	
	@GetMapping("employees")	
   public List<Employee> getAllEmployees() {
		return employeeService.readEmployees();
	}
	@GetMapping("employees/{id}")
	public Employee getEmployeeById(@PathVariable Long id){
		//System.out.println("hhh");
		return employeeService.readEmployee(id);
	}
	
	@PostMapping("employees")
	public String createEmployee(@RequestBody Employee employee) {
		
		return employeeService.createEmployee(employee);
	
	}
	@DeleteMapping("employees/{id}")
	public String deleteEmployee(@PathVariable Long id) {
		if(employeeService.deleteEmployee(id)) {
		return  "delete sucessfully";	
		}else {
			return "error not deleted";
		}
	
		
		
	}
	@PutMapping("employees/{id}")
	public String putMethodName(@PathVariable Long id,@RequestBody Employee employee){
		return employeeService.updateEmployee(id, employee);

	}
}

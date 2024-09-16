package com.example.EM.project.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.EM.project.Entity.EmployeeEntity;
import com.example.EM.project.Entity.EmployeeRepository;
import com.example.EM.project.Model.Employee;
@Service
public class EmployeeServiceImpl implements EmployeeService {
	@Autowired
	private EmployeeRepository employeeRepository;
	
	

	@Override
	public String createEmployee(Employee employee) {
		EmployeeEntity employeeEntity=new EmployeeEntity();
		// copy all the data of employee into the employeeentity
		BeanUtils.copyProperties(employee, employeeEntity);
		employeeRepository.save(employeeEntity);
		return "saved sucessfully ";
	}

	@Override
	public List<Employee> readEmployees() {
        List<EmployeeEntity> employeesList = employeeRepository.findAll();
        List<Employee> employees= new ArrayList<>();
   
        for (EmployeeEntity employeeEntity : employeesList) {
            
            Employee emp = new Employee();
            emp.setId(employeeEntity.getId());
            emp.setName(employeeEntity.getName());
            emp.setEmail(employeeEntity.getEmail());
            emp.setPhone(employeeEntity.getPhone());
          
            employees.add(emp);
        }
        return employees;     
    }
	@Override
	public Employee readEmployee(Long id) {
		EmployeeEntity employeeEntity=employeeRepository.findById(id).get();
		Employee employee=new Employee();
		BeanUtils.copyProperties(employeeEntity,employee);
		return employee;

	}



	@Override
	public boolean deleteEmployee(Long id) {
		EmployeeEntity emp=employeeRepository.findById(id).get();
		employeeRepository.delete(emp);
		return true;
		
	}

	@Override
	public String updateEmployee(Long id, Employee employee) {
		EmployeeEntity existingEmployee=employeeRepository.findById(id).get();
		
		existingEmployee.setName(employee.getName());
		existingEmployee.setEmail(employee.getEmail());
		existingEmployee.setPhone(employee.getPhone());
		employeeRepository.save(existingEmployee);
		return "update successfully";
	}

	
}

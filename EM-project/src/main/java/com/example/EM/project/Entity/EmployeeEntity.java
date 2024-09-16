package com.example.EM.project.Entity;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
//used for mapping
@Entity
@Table(name="emp_db")
public class EmployeeEntity {
//PrimaryKey
@Id
//automatically  generateed the key
@GeneratedValue(strategy=GenerationType.IDENTITY)
private long id;
	

private String name;
private String phone;
private String email;

	
	

}

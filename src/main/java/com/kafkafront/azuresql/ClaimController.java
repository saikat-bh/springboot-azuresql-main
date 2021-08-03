package com.kafkafront.azuresql;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@CrossOrigin("*")
public class ClaimController {
    @Autowired
    private EmployeeRepository repository;

    @PostMapping("/employee")
    public @ResponseBody Employee addEmployee(@RequestBody Employee employee) {
        return repository.save(employee);
    }

    @GetMapping("/employees")
    public @ResponseBody List<Employee> getEmployees() {
        return repository.findAll();
    }

    @Autowired
    private ClaimRepository claimNo;

    @PostMapping("/update/claim")
    public @ResponseBody Claims addClaims(@RequestParam int id, @RequestParam String status) {
        Claims claim = claimNo.findById(id).orElseThrow(null);
        if(null != claim) {
            claim.setFSK0109(status);
        }
        return claimNo.save(claim);
    }

    @GetMapping("/save/claim")
    public @ResponseBody Claims addClaims() {
        return claimNo.save(new Claims("14/12/2019", "Saikat", 2, "14/12/2021", "14/12/2021", "open", 22));
    }

    @GetMapping("/fetch/claims")
    public @ResponseBody List<Claims> claimsNo() {
        return claimNo.findAll();

    }
}

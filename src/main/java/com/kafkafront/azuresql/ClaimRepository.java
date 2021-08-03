package com.kafkafront.azuresql;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ClaimRepository extends JpaRepository<Claims,Integer> {
}
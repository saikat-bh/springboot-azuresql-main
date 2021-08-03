package com.kafkafront.azuresql;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table

public class Claims {
    @Id
    @GeneratedValue
    private int id;
    private String FSD0003;  // Created Date (should be a date field)
    private String FSD0005;  // Agent
    private int FSK0101;     // Claim No.
    private String FSK0102;  //Claim Date (should be a date field)
    private String FSK0103;  //ClaimRegDate (should be a date field)
    private String FSK0109;  //Claim Status
    private int FPO0101;     //Pol No.

    public Claims() {
        super();
        // TODO Auto-generated constructor stub
    }

    public Claims(String fSD0003, String fSD0005, int fSK0101, String fSK0102, String fSK0103, String fSK0109,
                  int fPO0101) {
        super();

        FSD0003 = fSD0003;
        FSD0005 = fSD0005;
        FSK0101 = fSK0101;
        FSK0102 = fSK0102;
        FSK0103 = fSK0103;
        FSK0109 = fSK0109;
        FPO0101 = fPO0101;
    }

    public int getId() {
        return id;
    }

    public String getFSD0003() {
        return FSD0003;
    }

    public void setFSD0003(String fSD0003) {
        FSD0003 = fSD0003;
    }

    public String getFSD0005() {
        return FSD0005;
    }

    public void setFSD0005(String fSD0005) {
        FSD0005 = fSD0005;
    }

    public int getFSK0101() {
        return FSK0101;
    }

    public void setFSK0101(int fSK0101) {
        FSK0101 = fSK0101;
    }

    public String getFSK0102() {
        return FSK0102;
    }

    public void setFSK0102(String fSK0102) {
        FSK0102 = fSK0102;
    }

    public String getFSK0103() {
        return FSK0103;
    }

    public void setFSK0103(String fSK0103) {
        FSK0103 = fSK0103;
    }

    public String getFSK0109() {
        return FSK0109;
    }

    public void setFSK0109(String fSK0109) {
        FSK0109 = fSK0109;
    }

    public int getFPO0101() {
        return FPO0101;
    }

    public void setFPO0101(int fPO0101) {
        FPO0101 = fPO0101;
    }


}

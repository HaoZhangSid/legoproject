package data;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "lego_round_time")
public class LegoRoundTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "round_number")
    private int roundNumber;

    @Column(name = "time")
    private Timestamp time;

    @Column(name = "legosetting_id")
    private int legoSettingId;

    // Getter 和 Setter 方法
 // Getter 和 Setter 方法
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getRoundNumber() {
        return roundNumber;
    }

    public void setRoundNumber(int roundNumber) {
        this.roundNumber = roundNumber;
    }

    public Timestamp getTime() {
        return time;
    }

    public void setTime(Timestamp time) {
        this.time = time;
    }

    public int getLegoSettingId() {
        return legoSettingId;
    }

    public void setLegoSettingId(int legoSettingId) {
        this.legoSettingId = legoSettingId;
    }
    // 构造函数
}

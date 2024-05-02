package data;

import java.sql.Timestamp;
import java.util.Calendar;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="legosetting")
public class LegoSetting {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private double speed;
	private int action; 
	private java.sql.Timestamp time = new java.sql.Timestamp(Calendar.getInstance().getTimeInMillis());
	private double proportional;
	private double integral;
	private double derivative;
	@ManyToOne(fetch=FetchType.LAZY, cascade = CascadeType.PERSIST)
	@JsonBackReference // To handle converting object to JSON and backwards
	@JoinColumn(name="legoid")	
	private Lego lego;
	
	public LegoSetting() {
		super();
	}

	public LegoSetting(int id, double speed, int action, Timestamp time, double proportional, double integral, double derivative) {
		super();
		this.id = id;
		this.speed = speed;
		this.action = action;
		this.time = time;
		this.proportional = proportional;
		this.integral = integral;
		this.derivative = derivative;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getSpeed() {
		return speed;
	}

	public void setSpeed(double speed) {
		this.speed = speed;
	}

	public int getAction() {
		return action;
	}

	public void setAction(int action) {
		this.action = action;
	}

	public java.sql.Timestamp getTime() {
		return time;
	}

	public void setTime(java.sql.Timestamp time) {
		this.time = time;
	}

	public Lego getLego() {
		return lego;
	}

	public void setLego(Lego lego) {
		this.lego = lego;
	}

	public double getProportional() {
		return proportional;
	}

	public void setProportional(double proportional) {
		this.proportional = proportional;
	}

	public double getIntegral() {
		return integral;
	}

	public void setIntegral(double integral) {
		this.integral = integral;
	}

	public double getDerivative() {
		return derivative;
	}

	public void setDerivative(double derivative) {
		this.derivative = derivative;
	}

	@Override
	public String toString() {
		return id + "#" + speed + "#" + action + "#" + time;
	}
}

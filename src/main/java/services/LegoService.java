package services;

import java.util.List;
import data.LegoRoundTime;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import data.*;
import javax.ws.rs.QueryParam;
@Path("/lego")
public class LegoService {
	EntityManagerFactory emf=Persistence.createEntityManagerFactory("lego");	
	
	@Path("/getlego")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Lego getLego() {
	    EntityManager em=emf.createEntityManager();
	    em.getTransaction().begin();
	    Lego l=em.find(Lego.class, 1);
	    em.getTransaction().commit();		
		return l;
	}
	
	@Path("/setvalues")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public LegoSetting setValues(LegoSetting ls) {
	    System.out.println(ls);
	    EntityManager em = emf.createEntityManager();
	    em.getTransaction().begin();

	    // 获取传入对象中的 lego 对象
	    Lego lego = ls.getLego();
	    if (lego != null) {
	        // 获取 lego 对象的 legoid
	        int legoid = lego.getId();
	        if (legoid != 0) {
	            // 根据 legoid 查询数据库中是否存在相同记录
	            LegoSetting existingSetting = em.find(LegoSetting.class, legoid);
	            if (existingSetting != null) {
	                // 如果存在，则更新现有记录
	                existingSetting.setSpeed(ls.getSpeed());
	                existingSetting.setAction(ls.getAction());
	                existingSetting.setProportional(ls.getProportional());
	                existingSetting.setIntegral(ls.getIntegral());
	                existingSetting.setDerivative(ls.getDerivative());
	                existingSetting.setTime(ls.getTime());
	                em.merge(existingSetting);
	                em.getTransaction().commit();
	                return existingSetting;
	            }
	        }
	    }

	    // 如果没有找到相同记录或者 legoid 为零，则执行插入操作
	    em.persist(ls);
	    em.getTransaction().commit();
	    return ls;
	}
	@Path("/getvalues")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public LegoSetting getValues() {
	    EntityManager em=emf.createEntityManager();
	    em.getTransaction().begin();
		Query q=em.createQuery("select s from LegoSetting s order by s.id desc").setMaxResults(1);
		List<LegoSetting> list=q.getResultList();
		em.getTransaction().commit();		
		return list.get(0);
	}
	@Path("/getspeed")
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String getSpeed() {
	    EntityManager em=emf.createEntityManager();
	    em.getTransaction().begin();
		Query q=em.createQuery("select s from LegoSetting s order by s.id desc").setMaxResults(1);
		List<LegoSetting> list=q.getResultList();
		em.getTransaction().commit();		
		return ""+list.get(0).getSpeed();
	}
	@Path("/getProportional")
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String getProportional() {
	    EntityManager em=emf.createEntityManager();
	    em.getTransaction().begin();
		Query q=em.createQuery("select s from LegoSetting s order by s.id desc").setMaxResults(1);
		List<LegoSetting> list=q.getResultList();
		em.getTransaction().commit();		
		return ""+list.get(0).getSpeed();
	}
	
	@Path("/saveRoundTime")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public LegoRoundTime saveRoundTime(LegoRoundTime roundTime) {
	    EntityManager em = emf.createEntityManager();
	    em.getTransaction().begin();
	    em.persist(roundTime);
	    em.getTransaction().commit();
	    return roundTime;
	}

	@Path("/getRoundTimes")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<LegoRoundTime> getRoundTimes(@QueryParam("legoSettingId") int legoSettingId) {
	    EntityManager em = emf.createEntityManager();
	    em.getTransaction().begin();
	    Query query = em.createQuery("SELECT rt FROM LegoRoundTime rt WHERE rt.legoSettingId = :legoSettingId")
                .setParameter("legoSettingId", legoSettingId);
	    List<LegoRoundTime> roundTimes = query.getResultList();
	    em.getTransaction().commit();
	    return roundTimes;
	}

	
}

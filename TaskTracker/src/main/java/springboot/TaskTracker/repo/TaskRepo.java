package springboot.TaskTracker.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import springboot.TaskTracker.model.Task;

public interface TaskRepo extends JpaRepository<Task, Integer> {
}

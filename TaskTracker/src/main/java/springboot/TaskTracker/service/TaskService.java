package springboot.TaskTracker.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import springboot.TaskTracker.model.Task;
import springboot.TaskTracker.repo.TaskRepo;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    private final TaskRepo taskRepo;

    @Autowired
    public TaskService(TaskRepo taskRepo) {
        this.taskRepo = taskRepo;
    }

    public List<Task> getAllTasks() {
        return taskRepo.findAll();
    }

    public Optional<Task> getTaskById(int id) {
        return taskRepo.findById(id);
    }

    public Task addTask(Task task) {
        return taskRepo.save(task);
    }
    public Task updateTask(Task task) {
        return taskRepo.save(task);
    }

    public void deleteTask(int id) {
        taskRepo.deleteById(id);
    }
}

import { connect } from "../db";

// Obtener todos
export const getTasks = async(req, res) => {

  try {
    const conn = await connect();

    const [tasks] = await conn.query('SELECT * FROM task');
    
    res.json(tasks);

  } catch (error) {
    console.log(error);
    res.status(500).send("Algo salio mal en la Base de Datos");
  }

  
};

// Obtener por id
export const getTask = async(req, res) => {
  const id = req.params.id;

  try {
    const conn = await connect();
    const [task] = await conn.execute('SELECT * FROM task WHERE id = ?', [id]);
  
    res.json(task[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("Algo salio mal en la Base de Datos");
  }
};

// Obtener conteo de tasks
export const getTaskCounter = async(req, res) => {

  try {
    const conn = await connect();
    const [task] = await conn.execute('SELECT COUNT(*) FROM task');

    res.json(task[0]["COUNT(*)"]);

  } catch (error) {
    console.log(error);
    res.status(500).send("Algo salio mal en la Base de Datos");
  }
};


export const createTasks = async(req, res) => {
  


  try {
    const conn = await connect();
    const [task] = await conn.execute('INSERT INTO task (title, description) VALUES (?, ?)', [
      req.body.title, req.body.description
    ]);

    res.json({
      id: task["insertId"],
      ...req.body
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg : "Algo salio mal en la Base de Datos"});
  }
};


export const deleteTasks = async(req, res) => {
  const id = req.params.id;

  try {
    const conn = await connect();
    await conn.execute('DELETE FROM task WHERE id = ?', [id]);
  
    res.json("Eliminado correctamente");

  } catch (error) {
    console.log(error);
    res.status(500).send("Algo salio mal en la Base de Datos");
  }
};


export const updateTasks = async(req, res) => {
  
  const id = req.params.id;


  try {
    const conn = await connect();
    const [task] = await conn.execute(`UPDATE task SET title = "${req.body.title}" , description = "${req.body.description}" WHERE id = ${id}`);

    res.json("Actualizado correctamente");
  } catch (error) {
    console.log(error);
    res.status(500).send("Algo salio mal en la Base de Datos");
  }
};

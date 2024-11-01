package com.cooweb.dao;

import jakarta.transaction.Transactional;
import java.util.List;
import com.cooweb.models.Usuario;

@Transactional
public interface UsuarioDao {
	List<Usuario> getUsuarios();

	void eliminar(Long id);
	void registrar(Usuario usuario);
	boolean verificarCredenciales(Usuario usuario);
	
	
}

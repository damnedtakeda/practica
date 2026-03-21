from pydantic_settings import BaseSettings, SettingsConfigDict

class Configs(BaseSettings):
    port: int = 8000
    database_url: str
    jwt_secret_key: str
    jwt_algorithm: str
    jwt_access_token_expires_minutes: int = 60
    
    model_config = SettingsConfigDict(extra="ignore", env_file=".env")

configs = Configs()

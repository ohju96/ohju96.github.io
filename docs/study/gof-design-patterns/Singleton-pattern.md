---
sidebar_position: 1
---

# Singleton pattern : 싱글톤 패턴

- 런타임 및 환경 셋팅에 대한 정보 등 인스턴스가 여러개일 때 문제가 생길 수 있는데 이를 해결하기 위해 싱글톤 패턴을 사용하여 인스턴스를 오직 한 개만 만들어 제공함으로써 해결할 수 있다.

## 싱글톤을 사용하지 않았을 때

```java
public class Settings {
}
```

```java
public class App {
    public static void main(String[] args) {
        Settings settings1 = new Settings();
        Settings settings2 = new Settings();
        System.out.println(settings1 == settings2);
    }
}

: false
```

- 싱글톤을 사용하지 않았을 때 `new Settings();`를 통해 인스턴스를 생성한 `settings1` `settings2`는 서로 같은 인스턴스가 아니게 된다.

## private 생성자와 static 메서드를 사용해서 싱글톤 구현

```java
public class Settings {
    private static Settings instance;

    private Settings() {}
    
    public static Settings getInstance() {
        if (instance == null) {
            instance = new Settings();
        }
        return instance;
    }
}
```

- Settings를 `private`으로 설정해 주고 기본 생성자를 통해 `new` 를 통한 인스턴스 생성을 막아준다.
- Settings에 대한 인스턴스를 `static`하게 생성해 주고 `getInstance()`에서 인스턴스가 생성되어 있다면 기존 인스턴스를 사용하고 그렇지 않다면 새로 생성하도록 만들어 준다.

```java
public class App {
    public static void main(String[] args) {
        Settings settings1 = Settings.getInstance();
        Settings settings2 = Settings.getInstance();
        System.out.println(settings1 == settings2);
    }
}

: true
```

- 이제 `settings1` `settings2`가 같게 되었다.

### 1. 문제가 있다!

- 우리는 보통 웹 애플리케이션을 만들 때 멀티 스레드를 사용하게 된다. 하지만 이 코드는 멀티 스레드 환경에서 안전하지 않다.

```java
public static Settings getInstance() {
        if (instance == null) {
            instance = new Settings();
        }
        return instance;
    }
```

- `A 스레드`가 `if`를 통과하고 인스턴스를 생성하려고 할 때 `B 스레드`도 `if`를 통과한 상태가 될 수 있다. 그렇게 되면 서로 다른 인스턴스가 생성되게 된다.

## 멀티 스레드 환경에서 안전하게 싱글톤 구현

### 1. synchronized를 사용한 싱클톤 구현

```java
public static synchronized Settings getInstance() {
        if (instance == null) {
            instance = new Settings();
        }
        return instance;
    }
```

- `synchronized` 키워드를 사용할 수 있다.
- 단점으로는 동기화를 처리하기 때문에 성능에 불이익이 있을 수 있다.

### 2. eager initialization(이른 초기화)를 사용한 싱글톤 구현

```java
public class Settings {
    private static final Settings INSTANCE = new Settings();
    private Settings() {}

    public static synchronized Settings getInstance() {
        return INSTANCE;
    }
}
```

- `eager initialization(이른 초기화)`를 사용할 수 있다.
- 이 방법은 스레드 세이프하다.
- 클래스가 로딩되는 시점에 스태틱하게 초기화가 되기 때문에 즉, 미리 만들어두었기 때문에 멀티스레드 환경에서도 안전하다.
- 단점으로는 미리 만들어두기 때문에 문제가 될 수 있다. 예를 들어서 비용이 큰 객체인 경우 미리 만들어 두고 잘 사용하지 않는다면 리소스 낭비가 발생하게 된다.

### 3. double checked locking을 사용한 싱글톤 구현

```java
public class Settings {
    private static Settings instance;
    private Settings() {}

    public static Settings getInstance() {
        if (instance == null) {
            synchronized (Settings.class) {
                if (instance == null) {
                    instance = new Settings();
                }
            }
        }
        return instance;
    }
}
```

- `double checked locking`을 사용할 수 있다.
- 먼저 `if`를 통과한 스레드가 `synchronized`를 통해 인스턴스를 생성되고 그동안 다른 스레드들은 대기했다 생성 된 인스턴스를 사용하게 된다.
- 이 방법은 `getInstance()`를 호출할 때 마다 `synchronized`를 사용하게 되진 않는다. 여러 스레드가 우연하게 `if`에 들어온 경우에만 `synchronized`를 처리하기 때문에 성능에 유리하고 인스턴스를 원할 때 만들 수 있기 때문에 이른 초기화 방법 보다 유리하다.

### 4. static inner 클래스 (초기화 지연 기법)를 사용한 싱글톤 구현

```java
public class Settings {
    private Settings() {}
    
    private static class SettingsHolder {
        private static final Settings INSTANCE = new Settings();
    }

    public static Settings getInstance() {
        return SettingsHolder.INSTANCE;
    }
}
```

- `static inner 클래스`를 사용할 수 있다. (초기화 지연 기법)
- 이른 초기화와 달리 `getInstance()`를 호출할 때 JVM에 로드되기 때문에 해당 클래스에 여러 메서드들이 있을 때 인스턴스가 생성되지 않아 장점이 있다.
- 인스턴스 생성 비용이 비싸거나 오래 걸릴 때 장점이 있을 수 있다.

## 싱글톤 패턴 구현을 깨뜨리는 방법

### 1. 리플렉션(****Reflection)**** 사용하기

```java
public class App {
    public static void main(String[] args) throws NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
        Settings settings1 = Settings.getInstance();
//        Settings settings2 = Settings.getInstance();
        Constructor<Settings> constructor = Settings.class.getDeclaredConstructor();
        constructor.setAccessible(true);
        Settings settings2 = constructor.newInstance();
        System.out.println(settings1 == settings2);
    }
}

: false
```

### 2. 직렬화 & 역직렬화 사용하기

```java
public class Settings implements Serializable {
    private Settings() {}

    private static class SettingsHolder {
        private static final Settings instance = new Settings();
    }

    public static Settings getInstance() {
        return SettingsHolder.instance;
    }
}
```

- Serializable 인터페이스를 구현하면 직렬화, 역직렬화할 수 있다.
    - 파일에 읽고, 쓰기 가능해 진다.

```java
public class App {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        Settings settings1 = Settings.getInstance();
        Settings settings2 = null;

        try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("settings.obj"))) {
            out.writeObject(settings1);
        }

        try (ObjectInputStream in = new ObjectInputStream(new FileInputStream("settings.obj"))) {
            settings2 = (Settings) in.readObject();
        }

        System.out.println(settings1 == settings2);
    }
}

: false
```

- 역직렬화 할 때는 반드시 생성자를 사용해서 인스턴스를 만들어 준다. 그렇기 때문에 다른 객체가 된다.

### 3. 역직렬화 대응 방안

```java
public class Settings implements Serializable {
    private Settings() {}

    private static class SettingsHolder {
        private static final Settings instance = new Settings();
    }

    public static Settings getInstance() {
        return SettingsHolder.instance;
    }
    
    protected Object readResolve() {
        return getInstance();
    }
}
```

- `readResolve()`를 사용하면 동일한 객체를 얻을 수 있다.

## 안전하고 단순하게 싱글톤 구현

### 1. ENUM 사용

```java
public enum Settings {
    INSTANCE;
}
```

- enum을 사용해 준다.

```java
public class App {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        Settings settings1 = Settings.INSTANCE;
        Settings settings2 = Settings.INSTANCE;
        System.out.println(settings1 == settings2);
    }
}

: true
```

- 리플렉션, 직렬화&역직렬화에도 안전하고 간단하게 사용할 수 있으며 유일한 인스턴스가 보장된다.
- 단점은 enum을 미리 만들어둔다는 것이다. 그리고 상속을 사용하지 못 한다는 것이다.
- enum은 컴파일할 때 enum 만을 상속 받을 수 있다.

## Spring에서 싱글톤은 어떻게 사용되고 있을까?

```java
public class Runtime {
    private static final Runtime currentRuntime = new Runtime();

    private static Version version;

    /**
     * Returns the runtime object associated with the current Java application.
     * Most of the methods of class {@code Runtime} are instance
     * methods and must be invoked with respect to the current runtime object.
     *
     * @return  the {@code Runtime} object associated with the current
     *          Java application.
     */
    public static Runtime getRuntime() {
        return currentRuntime;
    }

    /** Don't let anyone else instantiate this class */
    private Runtime() {}
...
```

- `java.lang.Runtime`에서 사용하고 있다.
- 스프링에서 빈 스코프 중 하나로 싱글톤 스코프
- 빌더, 퍼사드, 추상 팩토리 등 다른 디자인 패턴에서 구현체 일부로 사용되기도 한다.
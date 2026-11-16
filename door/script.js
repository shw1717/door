// 탭 전환 로직
// - 탭 버튼을 누르면 해당 섹션만 보이게 함
// - 주소 뒤에 #overview, #principle, #usage 가 붙어서
//   특정 탭으로 바로 연결하거나 새로고침해도 같은 탭이 유지됨

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const VALID = Array.from(panels).map((p) => p.id);

function showTab(id) {
  if (!VALID.includes(id)) id = VALID[0]; // 잘못된 주소면 개요로

  tabs.forEach((tab) => {
    tab.setAttribute("aria-selected", String(tab.dataset.target === id));
  });
  panels.forEach((panel) => {
    panel.hidden = panel.id !== id;
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    history.replaceState(null, "", "#" + tab.dataset.target);
    showTab(tab.dataset.target);
    window.scrollTo({ top: 0 });
  });
});

// 뒤로가기 등으로 주소가 바뀔 때도 반영
window.addEventListener("hashchange", () => showTab(location.hash.slice(1)));

// 처음 열릴 때
showTab(location.hash.slice(1));
